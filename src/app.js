const express = require('express')
const app = express()
const port = 3000


const { Book } = require('./models');

//Book.create({ isbn: 289102, title: 'cHamlet', copies: 5 });


app.get('/books', (req, res) => {
  Book.findAll().then(books => {
    res.send(books)
  })
})

app.get('/book/:id', (req, res) => {
  console.log(req.id);
  Book.findByPk(req.params.id).then(book => {
    res.send(book)
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
