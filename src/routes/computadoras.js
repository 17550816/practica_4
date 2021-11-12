//routes/computadoras.js
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('Estas en el endpoint computadoras')
})

module.exports = router

