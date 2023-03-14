const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.send('<h1>Lets sing the Bottles of beer song!! </h1> ' )
})




module.exports=router