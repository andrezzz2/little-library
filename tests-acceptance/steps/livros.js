const {Given, When, Then} = require('@cucumber/cucumber')
const assert = require('assert').strict

Given('não existe livro com isbn {}', function (isbn) {
  return 'pending';
});

When('cadastrar livro', function (book) {
  return 'pending';
});

Then('receber status {}, mensagem: {}', function (code, msg) {
   return 'pending';
});

Then('existe livro com isbn {}', function (isbn) {
  return 'pending';
});
