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
                const payload = { "email":user.email, "userType":user.userType } //deveria ser id do usuario do banco de dados
                const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);
                res.cookie('token', accessToken, { httpOnly: true , expires: new Date(Date.now() + 1 * 3600000)} ); //token expira em 1 hora
                res.cookie('username', user.username, { httpOnly: false , expires: new Date(Date.now() + 1 * 3600000)} );
                if(user.userType == 0)
                    res.cookie('userType', "Bibliotecario", { httpOnly: false , expires: new Date(Date.now() + 1 * 3600000)} );
                else
                    res.cookie('userType', "Usuario", { httpOnly: false , expires: new Date(Date.now() + 1 * 3600000)} );
                res.redirect('http://localhost:3000');
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

exports.getCssLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/style2.css'));
}
