const {Given, When, Then, Before} = require('@cucumber/cucumber')
const pactum = require('pactum')
const assert = require('assert').strict

let spec = pactum.spec()

Before(async () => {
  spec = pactum.spec();
});

function getUrl(path) {
  return "http://localhost:3000/" + path
}

Given('existe livro com isbn {}', async function (isbn) {
  await pactum.spec().delete(getUrl("book/" + isbn)).toss()
  await pactum.spec().post(getUrl("book/"))
    .withJson({
      isbn: isbn,
      titulo: 'alice no pais das maravilhas',
      numero_exemplares: 1
    })
    .expectStatus(201);
});

Given('não existe livro com isbn {}', async function (isbn) {
  var response = await pactum.spec().delete(getUrl("book/" + isbn)).toss()
  if([204, 404].includes(response.statusCode)) {
    return 'success'
  }
  console.log(response.statusCode)
  return 'pending'
});

When('cadastrar livro', async function (data) {
  var book = JSON.parse(data)
  await spec.post(getUrl("book/"))
    .withJson(book)
    .toss();
});

When('modificar livro com isbn {}', async function (isbn, data) {
  var book = JSON.parse(data)
  await spec.put(getUrl("book/" + isbn))
    .withJson(book).toss();
});

Then('deveria receber status {int}', function (code) {
  spec.response().should.have.status(code);
});

Then('deveria existir livro com isbn {}', function (isbn) {
  pactum.spec().get(getUrl("book/" + isbn)).expectStatus(200);
});

Then('não deveria existir livro com isbn {}', function (isbn) {
  pactum.spec().get(getUrl("book/" + isbn)).expectStatus(404);
});

Then('deveria existir livro com campos', async function (data) {
  var book = {"book": JSON.parse(data)}
  var spec = pactum.spec()
  await spec.get(getUrl("book/" + book.book.isbn)).toss()
  spec.response().should.have.status(200);
  spec.response().should.have.jsonLike(book);
});
