const express = require("express") 
const routerProductos = require("./routerProductos") 

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/productos", routerProductos)

const port = 8080 

const server = app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
}) 
server.on("error", error => console.log(`Error en servidor ${error}`))