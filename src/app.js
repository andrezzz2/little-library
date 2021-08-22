const express = require('express');
const cookieParser = require('cookie-parser');
const app = express()
app.use(express.urlencoded());
app.use(express.json()); 
app.use(cookieParser());

const sequelize = require('./models/index.js'); 
sequelize.sync().then();


//criando arquivo com lista de todos os livros
const Book = require('./models/book.js');                  
const fs = require('fs');
Book.findAll().then(books =>{
  var texto = JSON.stringify(books);
  texto = 'var data =  {"data" : ' + texto + '}';
  fs.writeFile('data.js', texto, (err) => {
      if (err) throw err;
  });
});

const port = 3000

require("./routes/index.routes")(app)
require("./routes/login.routes")(app)
require("./routes/register.routes")(app)
require("./routes/acervo.routes")(app)
require("./routes/groups.routes")(app)
require("./routes/emprestimos.routes")(app)
require("./routes/avisos.routes")(app)
require("./routes/gerencia.routes")(app)

require("./routes/book.routes")(app)

app.listen(port, () => {
  console.log("app is running on http://localhost:",port);
});
