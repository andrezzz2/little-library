module.exports = app => {
    const acervo = require("../controllers/acervo.controller.js");
    var router = require("express").Router();
    router.get('/', acervo.getPage);
    router.get('/acervo.css', acervo.getCssPage);

    app.use('/acervo', router);
}