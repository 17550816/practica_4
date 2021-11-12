//routes/automoviles.js
const express = require('express')
const router = express.Router()

router.get('/', (req,res, next)=>{
    res.send ('Conectado al endpoint automoviles')
})

module.exports = router