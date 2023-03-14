const express = require("express")
const router = express.Router()




router.get('/', (req,res) => {
    res.send(' <h1> 96 Bottles of beer </h1> ' )
})





module.exports=router