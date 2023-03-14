const express = require("express")
const router = express.Router()




router.get('/', (req, res) => {
    res.send('<h1>Bye Bye the End </h1> ' )
})





module.exports=router