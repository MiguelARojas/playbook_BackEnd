// usando objeto express
const express = require('express')

//app de express
const app = express()

// puerto en que vamos a ver nuestra app
const port = 3000

//path inicial, respondera al url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/launchx', (req, res) => {
    res.send("Bienvenido a launchx explorer")
})

// con esto inicialiamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})