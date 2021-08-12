module.exports = app => {
    const authenticate2 = require("./auth2.js");
    const index = require("../controllers/index.controller.js");
    var router = require("express").Router();
    router.get('/', index.getPage);
    router.get('/index.js', index.getJsPage);
    router.get('/index.css', index.getCssPage);

    router.get('/register', index.getRegisterPage);
    router.get('/register/register.js', index.getJsRegisterPage);
    router.get('/register/style.css', index.getCssRegisterPage);
    router.post('/register', index.register);

    router.get('/login', index.getLoginPage);
    router.get('/login/login.js', index.getJsLoginPage);
    router.get('/login/style.css', index.getCssLoginPage);
    router.post('/login', index.login);

    app.use('/', authenticate2, router);
  }