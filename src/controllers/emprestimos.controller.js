const Emprestimo  = require('../models/emprestimo.js');
const path = require('path');

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/emprestimos.html'));
}

exports.getCssPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/emprestimos.css'));
}

exports.getJsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/emprestimos.js'));
}

exports.getJsData = (req, res) => {
    const jwt = require("jsonwebtoken");
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
    const token = req.cookies.token;
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
        if(err){
            return res.status(403);
        } 
        Emprestimo.findAll({ where: { email: payload.email }}).then(emprestimo =>{
            const data = "var emprestimo = " + JSON.stringify(emprestimo);
            res.send(data);
        });
    });
}
