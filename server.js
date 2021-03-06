const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const PORT = process.env.PORT || 3001 
require('dotenv').config()

const app = express()

//const MONGODB_URL = 'mongodb://localhost:27017/noteKeeperDB'


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', router)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('Connected to the database')
})
mongoose.connection.on('error', (error) => {
  console.log(`Mongoose connection error:${error}`)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`client/build`))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.get('/', (req, res) => {
  res.send('Server is up')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})