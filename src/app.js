const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000

require("./routes/book.routes")(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
