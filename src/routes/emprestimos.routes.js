module.exports = app => {
    const emprestimos = require("../controllers/emprestimos.controller.js");
    var router = require("express").Router();
    router.get('/', emprestimos.getPage);
    router.get('/emprestimos.css', emprestimos.getCssPage);

    app.use('/emprestimos', router);
}