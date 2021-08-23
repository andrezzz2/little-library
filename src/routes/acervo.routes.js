module.exports = app => {
    const acervo = require("../controllers/acervo.controller.js");
    var router = require("express").Router();
    router.get('/', acervo.getPage);
    router.get('/acervo.css', acervo.getCssPage);
    router.get('/acervo.js', acervo.getJsPage);
    router.get('/data.js', acervo.getJsonData);
    router.get('/:id&:ns', acervo.getBookById);

    app.use('/acervo', router);
}