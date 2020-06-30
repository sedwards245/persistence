const express = require('express')
const app = express()

const registerRouter = require('./routes/register')
const studentRouter = require('./routes/students')

const PORT = 8080
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Landing Page for Persistent Student Application')
})

app.use('/register', registerRouter)
app.use('/students', studentRouter)

app.listen(PORT)

console.log(`Running application on ${PORT}...`)

module.exports = app