module.exports = app => {
    const logout = require("../controllers/logout.controller.js");
    var router = require("express").Router();

    router.get('/', logout.LogoutPage);

    app.use('/logout', router);
  }