const User = require('../models/user.js');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

exports.login = (req, res) => {
    User.findByPk(req.body.email).then(user => {         //procurar pelo id do link
        if(user == null) {   
            res.status(401).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/login'/><title>Redirect Page</title></head><body>E-mail ou Senha errada.</body>");
        }else{
            if(req.body.password == user.password){
                const payload = { "email":req.body.email } //deveria ser id do usuario do banco de dados
                const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);
                res.cookie('token', accessToken, { httpOnly: true });
                res.cookie('username', user.username, { httpOnly: false });
                res.end("<head><meta http-equiv='refresh' content='1;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Login feito com sucesso!</body>");
            }
            else{
                res.status(401).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/login'/><title>Redirect Page</title></head><body>E-mail ou Senha errada.</body>");
            }
        }
      }).catch(() => {
        res.status(500).send("Falha ao buscar.")
      });
}

exports.getLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/login.html'));
}

exports.getJsLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/login.js'));
}

exports.getCssLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/style2.css'));
}
