module.exports = app => {
    const notLoggedIn = require("./notLoggedIn.js");
    const index = require("../controllers/index.controller.js");
    var router = require("express").Router();
    router.get('/', notLoggedIn, index.getPage);
    router.get('/index.js', index.getJsPage);
    router.get('/style_index.css', index.getCssPage);
    router.get('/fundo.jpg', index.getImgPage);
    router.get('/aquisicoes.png', index.getImgPage2);
    router.get('/evento.jpeg', index.getImgPage3);
    router.get('/leituraInfantil.jpg', index.getImgPage4);

    router.get('/register', notLoggedIn, index.getRegisterPage);
    router.get('/register/register.js', index.getJsRegisterPage);
    router.get('/register/style2.css', index.getCssRegisterPage);
    router.post('/register', index.register);

    router.get('/login', notLoggedIn, index.getLoginPage);
    router.get('/login/login.js', index.getJsLoginPage);
    router.get('/login/style2.css', index.getCssLoginPage);
    router.post('/login', index.login);

    app.use('/', router);
  }