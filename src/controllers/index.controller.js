const path = require('path');

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/index.html'));
}

exports.getLoginOrConfigsJs = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/loginOrConfigs.js'));
}

exports.getCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/style_index.css'));
}

exports.getImgPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/img/fundo.jpg'));
}

exports.getImgPage2 = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/img/aquisicoes.png'));
}

exports.getImgPage3 = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/img/evento.jpeg'));
}

exports.getImgPage4 = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/img/leituraInfantil.jpg'));
}
