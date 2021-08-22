const path = require('path');

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/gerencia_livro.html'));
}

exports.getCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/gerencia_livro.css'));
}

exports.getInsertPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/insert_livro.html'));
}

exports.getDeletePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/delete_livro.html'));
}

exports.getInsertCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/insert_livro.css'));
}