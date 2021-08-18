module.exports = app => {
    const avisos = require("../controllers/avisos.controller.js");
    var router = require("express").Router();
    router.get('/', avisos.getPage);
    router.get('/avisos.css', avisos.getCssPage);

    app.use('/avisos', router);
}