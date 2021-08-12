module.exports = app => {
    const authenticate = require("./auth.js");
    const home = require("../controllers/home.controller.js");
    var router = require("express").Router();
    router.get('/', home.getPage);
    router.get('/homepage.js', home.getJsPage);
    app.use('/home', authenticate, router);
}