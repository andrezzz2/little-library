module.exports = app => {
    const notLoggedIn = require("./notLoggedIn.js");
    const login = require("../controllers/login.controller.js");
    var router = require("express").Router();

    router.get('/', notLoggedIn, login.getLoginPage);
    router.get('/style2.css', login.getCssLoginPage);
    router.post('/', login.login);

    app.use('/login', router);
  }