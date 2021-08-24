module.exports = app => {
    const acervo = require("../controllers/acervo.controller.js");
    var router = require("express").Router();
    router.get('/', acervo.getPage);
    router.get('/acervo.css', acervo.getCssPage);
    router.get('/acervo.js', acervo.getJsPage);
    router.get('/data.js', acervo.getJsonData);

    router.get('/livro.js', acervo.getJsBook);
    router.get('/livro/data.js', acervo.getBookJsonData);
    router.get('/:id', acervo.getBookById);
    

    app.use('/acervo', router);
}