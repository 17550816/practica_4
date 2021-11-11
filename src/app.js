require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

const usuarioRouter = require('./routes/usuarios')

app.use ('/usuarios', usuarioRouter)

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
})

module.exports = app
