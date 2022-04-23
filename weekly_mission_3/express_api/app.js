// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// HTTP METHODS
app.get('/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    // creamos nuestros objetos
    const explorer1 = {id:1, name:"Valente"}
    const explorer2 = {id:1, name:"Miguel"}
    const explorer3 = {id:1, name:"Victor"}

    // asignamos nuestros objetos a una lista de objeto
    const explorers = [explorer1,explorer2,explorer3]
    res.status(200).json(explorers)
})