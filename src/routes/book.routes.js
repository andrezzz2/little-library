module.exports = app => {
  const books = require("../controllers/book.controller.js");
  var router = require("express").Router();
  router.get('/', books.findAll)
  router.get('/:id', books.findOne)
  router.delete('/:id', books.delete)
  router.put('/:id', books.update)
  router.post('/', books.create)
  app.use('/book', router)
}
