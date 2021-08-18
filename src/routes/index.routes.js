module.exports = app => {
    const index = require("../controllers/index.controller.js");
    var router = require("express").Router();
    router.get('/', index.getPage);
    router.get('/style_index.css', index.getCssPage);

    router.get('/loginOrConfigs.js', index.getLoginOrConfigsJs);
    router.get('/fundo.jpg', index.getImgPage);
    router.get('/aquisicoes.png', index.getImgPage2);
    router.get('/evento.jpeg', index.getImgPage3);
    router.get('/leituraInfantil.jpg', index.getImgPage4);

    app.use('/', router);
}