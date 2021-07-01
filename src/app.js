const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000


const { Book } = require('./models');

app.get('/books', (req, res) => {
  Book.findAll().then(books => {
    res.send(books)
  })
})

app.get('/book/:id', (req, res) => {
  Book.findByPk(req.params.id).then(book => {
    if (book == null) {
      res.status(404).send("Não encontrado.")
    } else {
      res.send(book)
    }
  }).catch(() => {
    res.status(500).send("Falha ao buscar.")
  })
})

app.delete('/book/:id', (req, res) => {
  Book.findByPk(req.params.id).then(book => {
    if (book == null) {
      res.status(200).send("Não encontrado.")
    } else {
      book.destroy().then(u => {
        res.status(200).send("Deletado.")
      }).catch(err => {
        res.status(500).send("Falha ao deletar.")
      })
    }
  }).catch(err => {
    res.send(500).send("Falha ao buscar.")
  })
})

app.put('/book/:id', (req, res) => {
  try {
    const { id } = req.params;
    const updated = Book.update(req.body, {
      where: {isbn: id }
    }).then(res => res.updated)
    if (updated) {
      Book.findOne({ where: { isbn: id } }).then(book => {
        res.status(200).json({ book: book })
      });
    } else {
      res.status(404).send("Não encontrado.")
    }
  } catch (error) {
    return res.status(500).send("Falha ao atualizar.");
  }
})

app.post('/book', (req, res) => {
  try {
    Book.create(req.body).then(book => {
      res.status(201).json({ book: book });
    });
  } catch (error) {
    return res.status(500).error("Falha ao criar.")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
