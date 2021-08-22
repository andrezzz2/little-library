module.exports = app => {
    const gerencia = require("../controllers/gerencia.controller.js");
    var router = require("express").Router();
    router.get('/', gerencia.getPage);
    router.get('/gerencia_livro.css', gerencia.getCssPage);

    router.get('/inserir', gerencia.getInsertPage);
    router.get('/inserir/insert_livro.css', gerencia.getInsertCssPage);
    router.get('/deletar', gerencia.getDeletePage);
    router.get('/deletar/insert_livro.css', gerencia.getInsertCssPage);
    

    app.use('/gerenciarLivro', router);
}