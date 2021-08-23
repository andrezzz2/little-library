const Book  = require('../models/book.js');
const path = require('path');

var required_fields = ["isbn", "titulo", "numero_serie"]
var implemented_fiedls = required_fields + []

function RequiredFieldException (message) {
  this.message = message;
  this.name = 'RequiredFieldException';
}

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/gerencia_livro.html'));
}

exports.getCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/gerencia_livro.css'));
}

exports.getInsertPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/insert_livro.html'));
}

exports.InsertBook = (req, res) => {
    try {
        console.log(req.body);
        required_fields.map(field => {
          if (!req.body.hasOwnProperty(field)) {
            throw new RequiredFieldException('sem ' + field);
          }
        })
        Book.findOne({ where: { isbn: req.body.isbn, numero_serie: req.body.numero_serie } }).then(book =>{
            if (book==null){
                Book.create(req.body).then(book => {  
                    res.status(201).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/gerenciarLivro/inserir'/><title>Redirect Page</title></head><body>Livro inserido com sucesso!</body>");
                });
            }
            else{
                res.status(201).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/gerenciarLivro/inserir'/><title>Redirect Page</title></head><body>Livro já inserido!</body>");
            }
        });
    } catch (error) {
        if (error instanceof RequiredFieldException) {
          return res.status(400).send(error.message);
        }
        return res.status(500).send(error.message);
    }
}

exports.getDeletePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/delete_livro.html'));
}

exports.DeleteBook = (req, res) => {
    Book.findOne({ where: { isbn: req.body.isbn, numero_serie: req.body.numero_serie } }).then(book =>{
        if (book==null){
            res.status(201).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/gerenciarLivro/deletar'/><title>Redirect Page</title></head><body>Livro não encontrado!</body>");
        }
        else{
            Book.destroy({ where: { isbn: req.body.isbn, numero_serie: req.body.numero_serie } }).then(book =>{
                res.status(201).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/gerenciarLivro/deletar'/><title>Redirect Page</title></head><body>Livro deletado com sucesso!</body>");
            });
        }
    });

}

exports.getInsertCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/insert_livro.css'));
}