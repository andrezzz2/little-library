module.exports = app => {
    const authenticated = require("./auth.js");
    const home = require("../controllers/home.controller.js");
    var router = require("express").Router();
    router.get('/', home.getPage);
    router.get('/homepage.js', home.getJsPage);
    router.get('/style_homepage.css', home.getCssPage);
    router.get('/fundo.jpg', home.getImgPage);
    router.get('/aquisicoes.png', home.getImgPage2);
    router.get('/evento.jpeg', home.getImgPage3);
    router.get('/leituraInfantil.jpg', home.getImgPage4);
    app.use('/home', authenticated, router);
}