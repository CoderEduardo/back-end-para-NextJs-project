//Configurações
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const PORTA = 3000
const connection = require("./model/database/connection")
connection.authenticate().then(()=>console.log("Banco de dados conectado com sucesso!")).catch(erro=>{console.log(`Ocorreu um erro: ${erro}`)})

//Rotas
const loginRouter = require("./routes/login")
app.use("/",loginRouter)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta ${PORTA}`)
})