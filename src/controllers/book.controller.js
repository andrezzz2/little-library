const Book  = require('../models/book.js');
const User = require('../models/user.js');

var required_fields = ["isbn", "titulo", "numero_exemplares"]
var implemented_fiedls = required_fields + []

function RequiredFieldException (message) {
  this.message = message;
  this.name = 'RequiredFieldException';
}

exports.create = async (req, res) => {
  try {
    required_fields.map(field => {
      if (!req.body.hasOwnProperty(field)) {
        throw new RequiredFieldException('sem ' + field);
      }
    })
    
    const book = await Book.create(req.body);
    return res.status(201).send("livro criado.");
  } catch (error) {
    if (error instanceof RequiredFieldException) {
      return res.status(400).send(error.message);
    }
    return res.status(500).send(error.message);
  }
}

exports.findAll = async (req, res) => {
  try {
    const books = await Book.findAll()
    return res.status(200).json({ books })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if(book) {
      return res.status(200).json({ book });
    }
    return res.status(404).send("não encontrado.")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Book.update(req.body, {
      where: {isbn: id }
    })
    if (updated > 0) {
      return res.status(200).send("atualizado.")
    }
    return res.status(404).send("não encontrado.")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({
      where: {isbn: id }
    })
    if (deleted) {
      return res.status(204).send("deletado.")
    }
    return res.status(404).send("não encontrado.")
  } catch(error) {
    return res.status(500).send(error.message)
  }
}
