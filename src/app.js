const express = require('express');
const cookieParser = require('cookie-parser');
const app = express()
app.use(express.urlencoded());
app.use(express.json()); 
app.use(cookieParser());

const sequelize = require('./models/index.js');
sequelize.sync().then();

const port = 3000

require("./routes/index.routes")(app)
require("./routes/login.routes")(app)
require("./routes/register.routes")(app)
require("./routes/acervo.routes")(app)
require("./routes/groups.routes")(app)
require("./routes/emprestimos.routes")(app)
require("./routes/avisos.routes")(app)

require("./routes/book.routes")(app)

app.listen(port, () => {
  console.log("app is running on http://localhost:",port);
});
