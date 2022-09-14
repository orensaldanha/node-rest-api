const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT | 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  res.json(req.query);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})