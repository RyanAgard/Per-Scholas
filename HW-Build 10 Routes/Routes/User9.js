const express = require("express")
const router = express.Router()




router.get('/', (req, res) => {
    res.send('<h1> Alright Thats Enough Beer</h1> ' )
})






module.exports=router