const User = require('../models/user.js');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/index.html'));
}

exports.getJsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/index.js'));
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
