const Book  = require('../models/book.js');
const path = require('path');
const fs = require('fs');

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/acervo.html'));
}

exports.getCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/acervo.css'));
}

exports.getBookById = (req, res) => {
    Book.findOne({ where: { isbn: req.params.id } }).then(book => {         //procurar pelo isbn e numero de serie do link
        if(book) {
            return res.sendFile(path.join(__dirname + '/../pages/livro.html'));
        }
        return res.status(404).send("<head><meta http-equiv='refresh' content='1;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Exemplar não encontrado!</body>");
    })
}

exports.getBookJsonData = (req, res) => {
    const id = req.headers.referer.split("/")[4];
    Book.findOne({ where: { isbn: id } }).then(book => {         //procurar pelo isbn e numero de serie do link
        if(book) {
            livro = "var livro = " + JSON.stringify(book);
            return res.send(livro);
        }
        return res.status(404).send("<head><meta http-equiv='refresh' content='1;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Exemplar não encontrado!</body>");
    })
    
}

exports.getJsBook = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/livro.js'));
}

exports.getJsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/acervo.js'));
}

exports.getJsonData = (req, res) => {
    //res.sendFile(path.join(__dirname + '/../../data.js'));
    Book.findAll().then(books =>{
        var livros = JSON.stringify(books);
        livros = 'var data =  {"data" : ' + livros + '}';
        return res.send(livros);
    });

}
