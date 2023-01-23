const express = require('express')
var morse = require('morse');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    var encoded = morse.encode('Hello, world.');

  res.send(encoded)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})