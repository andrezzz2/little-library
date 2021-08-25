module.exports = app => {
    const groups = require("../controllers/groups.controller.js");
    const auth = require("./auth.js");
    var router = require("express").Router();
    router.get('/', groups.getPage);
    router.get('/groups.css', groups.getCssPage);

    app.use('/groups', auth, router);
}