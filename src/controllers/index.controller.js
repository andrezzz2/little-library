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
    res.sendFile(path.join(__dirname + '/../pages/css/style.css'));
}

exports.login = (req, res) => {
    User.findByPk(req.body.email).then(user => {         //procurar pelo id do link
        if(user == null) {   
            res.status(401).send("<head><meta http-equiv='refresh' content='2;url=/login'/><title>Redirect Page</title></head><body>E-mail ou Senha errada.</body>");
        }else{
            if(req.body.password == user.password){
                const payload = { "email":req.body.email } //deveria ser id do usuario do banco de dados
                const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);
                res.cookie('token', accessToken, { httpOnly: true });
                res.end("<head><meta http-equiv='refresh' content='1;url=../home'/><title>Redirect Page</title></head><body>Login feito com sucesso!</body>");
            }
            else{
                res.status(401).send("<head><meta http-equiv='refresh' content='2;url=/login'/><title>Redirect Page</title></head><body>E-mail ou Senha errada.</body>");
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
    res.sendFile(path.join(__dirname + '/../pages/css/style.css'));
}

exports.register = (req, res) => {
    console.log(req.body);
    try{
        User.findByPk(req.body.email).then(user => {         //procurar pelo id do link
            if(user != null) {   
                res.status(401).send("<head><meta http-equiv='refresh' content='2;url=/register'/><title>Redirect Page</title></head><body>E-mail já cadastrado.</body>");
            }else{
                if(req.body.password.length >= 8){
                    User.create(req.body).then(user => {  
                        res.status(201).send("<head><meta http-equiv='refresh' content='2;url=/'/><title>Redirect Page</title></head><body>Cadastro feito com sucesso!</body>");
                    });
                }
                else{
                    res.status(401).send("<head><meta http-equiv='refresh' content='2;url=/register'/><title>Redirect Page</title></head><body>A senha deve conter no mínimo 8 dígitos.</body>");
                }
            }
        });
    }catch(error) {
        return res.status(500).send("Falha ao criar.");
    }
}

exports.getRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/register.html'));
}

exports.getJsRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/register.js'));
}

exports.getCssRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/style.css'));
}
