module.exports = app => {
    const gerencia = require("../controllers/gerencia.controller.js");
    const authB = require("./authB.js");
    var router = require("express").Router();
    router.get('/', gerencia.getPage);
    router.get('/gerencia_livro.css', gerencia.getCssPage);

    router.get('/inserir', gerencia.getInsertPage);
    router.post('/inserir', gerencia.InsertBook);
    router.get('/inserir/insert_livro.css', gerencia.getInsertCssPage);

    router.get('/deletar', gerencia.getDeletePage);
    router.post('/deletar', gerencia.DeleteBook);
    router.get('/deletar/insert_livro.css', gerencia.getInsertCssPage);

    router.get('/emprestar', gerencia.getEmprestimoPage);
    router.post('/emprestar', gerencia.EmprestarLivro);
    router.get('/emprestar/insert_livro.css', gerencia.getInsertCssPage);

    router.get('/devolver', gerencia.getDevolucaoPage);
    router.post('/devolver', gerencia.DevolverLivro);
    router.get('/devolver/insert_livro.css', gerencia.getInsertCssPage);
    

    app.use('/gerenciarLivro', authB, router);
}