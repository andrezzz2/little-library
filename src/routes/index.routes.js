module.exports = app => {
    const authenticate2 = require("./auth2.js");
    const index = require("../controllers/index.controller.js");
    var router = require("express").Router();
    router.get('/', index.getPage);
    router.get('/js/index.js', index.getJsPage);
    router.post('/cadastro', index.cadastro);
    router.post('/login', index.login);
    app.use('/', authenticate2, router);
  }