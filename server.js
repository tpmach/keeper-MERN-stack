const express = require('express')
const bodyParser = require('bodyParser')

const PORT = 8000
const app = express()

app.get('/', (req, res) => {
  res.send('Server is up')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})