const User = require('../models/user.js');
const path = require('path');

exports.register = (req, res) => {
    console.log(req.body);
    try{
        User.findByPk(req.body.email).then(user => {         //procurar pelo id do link
            if(user != null) {   
                res.status(401).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/register'/><title>Redirect Page</title></head><body>E-mail já cadastrado.</body>");
            }else{
                if(req.body.password.length >= 8){
                    User.create(req.body).then(user => {  
                        res.status(201).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Cadastro feito com sucesso!</body>");
                    });
                }
                else{
                    res.status(401).send("<head><meta http-equiv='refresh' content='2;url=http://localhost:3000/register'/><title>Redirect Page</title></head><body>A senha deve conter no mínimo 8 dígitos.</body>");
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

exports.getCssRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/css/style2.css'));
}
