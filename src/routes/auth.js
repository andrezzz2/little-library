module.exports = (req, res, next) => {
    require('dotenv').config();
    const path = require('path');
    const jwt = require("jsonwebtoken");
    const User = require('../models/user.js');
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
    const token = req.cookies.token;

    if (token == null){    //se nao tem token, redireciona pra pagina inicial
        return res.status(201).send("<head><meta http-equiv='refresh' content='0;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Redirecting...</body>");
    } 
    else{
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
                return res.status(403);
            } 
            User.findByPk(payload.email).then(user => {        
                if(user == null) {    //se tem token mas email esta errado, redireciona pra pagina inicial
                    res.clearCookie('token', { path: '/' })
                    return res.status(201).send("<head><meta http-equiv='refresh' content='0;url=http://localhost:3000/'/><title>Redirect Page</title></head><body>Redirecting...</body>");
                }else{                                //se tem token e email certo, da acesso
                    return next();
                }  
            }).catch(() => {
                res.status(500).send("Falha ao buscar.");
            });
        });
    }
}