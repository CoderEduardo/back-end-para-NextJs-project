const express = require("express")
const router = express.Router()

router.get("/login",(req,res)=>{
    res.statusCode(200)
})

module.exports = router