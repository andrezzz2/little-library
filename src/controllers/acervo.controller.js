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
    const id  = req.params.id;
    Book.findByPk(id).then(book => {         //procurar pelo id do link
        if(book) {
            return res.sendFile(path.join(__dirname + '/../pages/livro.html'));
        }
        return res.status(404).send("<head><meta http-equiv='refresh' content='1;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Exemplar não encontrado!</body>");
    })
}

exports.getJsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/acervo.js'));
}

exports.getJsonData = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../data.js'));

}
