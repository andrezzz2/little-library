module.exports = (req, res, next) => {
    require('dotenv').config();
    const path = require('path');
    const jwt = require("jsonwebtoken");
    const User = require('../models/user.js');
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
    const token = req.cookies.token;

    if (token == null){ //se nao tem token, prossegue o acesso
        return next();
    }
    else{
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err) return res.status(403);

            User.findByPk(payload.email).then(user => {        
                if(user == null) {                   //se tem o token mas o email nao ta certo, prossegue o acesso
                    return next();
                }else{                                //se existe o email, redireciona pra homepage
                    //res.status(200).sendFile(path.join(__dirname + '/../pages/homepage.html'));
                    //res.redirect(200, '/home');
                    res.status(201).send("<head><meta http-equiv='refresh' content='0;url=http://localhost:3000/home'/><title>Redirect Page</title></head><body>Redirecting...</body>");
                }  
            }).catch(() => {
                res.status(500).send("Falha ao buscar.");
            });
        });
    }
}