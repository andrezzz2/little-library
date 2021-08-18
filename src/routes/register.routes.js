module.exports = app => {
    const notLoggedIn = require("./notLoggedIn.js");
    const register = require("../controllers/register.controller.js");
    var router = require("express").Router();

    router.get('/', notLoggedIn, register.getRegisterPage);
    router.get('/style2.css', register.getCssRegisterPage);
    router.post('/', register.register);

    app.use('/register', router);
  }