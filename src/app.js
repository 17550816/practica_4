require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

const usuarioRouter = require('./routes/usuarios')
const automovilesRouter = require('./routes/automoviles')
const computadorasRouter = require('./routes/computadoras')


app.use('/usuarios', usuarioRouter)
app.use('/automoviles', automovilesRouter)
app.use('/computadoras', computadorasRouter)


app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
})

module.exports = app
