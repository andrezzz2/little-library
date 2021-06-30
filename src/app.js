const express = require('express')
const app = express()
const port = 3000


const { Book } = require('./models');

Book.create({ isbn: 289102, title: 'cHamlet', copies: 5 });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
