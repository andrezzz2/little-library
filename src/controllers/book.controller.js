const { Book } = require('../models');

exports.create = (req, res) => {
  try {
    Book.create(req.body).then(book => {
      res.status(201).json({ book: book });
    });
  } catch (error) {
    return res.status(500).error("Falha ao criar.")
  }
}


exports.findAll = (req, res) => {
  Book.findAll().then(books => {
    res.send(books)
  })
}

exports.findOne = (req, res) => {
  Book.findByPk(req.params.id).then(book => {
    if (book == null) {
      res.status(404).send("Não encontrado.")
    } else {
      res.send(book)
    }
  }).catch(() => {
    res.status(500).send("Falha ao buscar.")
  })
}

exports.update = (req, res) => {
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
}


exports.delete = (req, res) => {
  Book.findByPk(req.params.id).then(book => {
    if (book == null) {
      res.status(404).send("Não encontrado.")
    } else {
      res.send(book)
    }
  }).catch(() => {
    res.status(500).send("Falha ao buscar.")
  })
}



