const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT | 3000

app.use(express.json())

let books = [
  {
    id: 1,
    name: "Dune",
    author: "Frank Herbert",
    isbn: 9780736692403,
    year: 1965
  }, 
  {
    id: 2,
    name: "Hitchhikers Guide to the Galaxy",
    author: "Doughlas Adams",
    isbn: 9781405053976,
    year: 1979
  }, 
  {
    id: 3,
    name: "The Count of Monte Cristo", 
    author: "Alexandre Dumas",
    isbn: 9780194608121,
    year: 1844
  }
]

app.get('/books', (req, res) => {
  res.json({"books": books})
})

app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const book = books.find(book => book.id === id)
  
  if(book) 
    res.json(book)
  else 
    res.status(404).json({"error": "Book not found"})
})

app.post('/books', (req, res) => {
  const book = req.body.book
  res.status(204).send()
})

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id)
  books = books.filter(book => book.id !== id)
  res.status(204).send()
}) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})