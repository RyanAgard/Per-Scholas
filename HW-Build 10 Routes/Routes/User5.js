const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.send('<h1> 99 Bottles of beer on the wall </h1> ' )
})







module.exports=router