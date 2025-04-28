const express = require("express")
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const PORTA = 3000

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta ${PORTA}`)
})