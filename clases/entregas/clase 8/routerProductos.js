const { Router } = require("express")
const ProductosClass = require("../clase 8/productosClass") 
const fs = require("fs") 
const express = require("express")

const routerProductos = new Router()

routerProductos.get("/", (req, res) => {
    const Productos = new ProductosClass("productos.json") 
    const Prod1 = {
        "name": "Aros Amore",
        "value": 1439,
        "link": "https://d2r9epyceweg5n.cloudfront.net/stores/973/263/products/img_20200521_155344_6471-6ad3eb4b796e446fb015900877877114-1024-1024.jpg"
      } //producto 1
    const Prod2 = {
        "name": "Anillo France",
        "value": 4728,
        "link": "https://d2r9epyceweg5n.cloudfront.net/stores/973/263/products/12ba57c2-c7cb-4276-97d2-1576453a23da1-8b8196814cbc38095d16476156196831-1024-1024.jpeg"
      } //producto 2
    const Prod3 = {
        "name": "Choker Shine",
        "value": 3199,
        "link": "https://d2r9epyceweg5n.cloudfront.net/stores/973/263/products/b1ee4308-dc69-49f9-9254-04eb697c43e41-745fc1031cd6d4b98716017423481848-1024-1024.jpeg"
      } //producto 3
    try {
        Productos.save(Prod1).then(async () => await Productos.save(Prod2)).then(async () => await Productos.save(Prod3))  
        res.json({ mensaje: "Se guardaron los productos exitosamente!"})
    } catch (error) {
        res.json({ mensaje: `Se ha producido un error! \n${error}`}) && console.log(error)
    }
}) 

routerProductos.get("/all", async (req, res) => {
    const data = await fs.promises.readFile("./productos.json", "utf-8")
    console.log("Productos obtenidos!")
    res.json(JSON.parse(data))
}) 

routerProductos.get("/:id", async (req, res) => {
    const data = await fs.promises.readFile("./productos.json", "utf-8") 
    const parsedData = JSON.parse(data) 
    const index = await parsedData.findIndex((P) => {
        if(P.id === req.params.id) return true 
        else return false && console.log("error")
    })
    console.log(index)
    console.log(parsedData.length)
    res.json(parsedData[index]) 
})

routerProductos.post("/add", async (req, res) => {
    const data = await fs.promises.readFile("./productos.json", "utf-8")
    const parsedData = JSON.parse(data)
    const idNP = parsedData.length + 1
    const NuevoProducto = 
    {
        "id": idNP,
        "name": "Pulsera Cora",
        "value": 4.500,
        "link": "https://d2r9epyceweg5n.cloudfront.net/stores/973/263/products/img_20210416_150919_3511-3917ab4e5eb8a7ebb916200579153256-640-0.jpg"
    }
    parsedData.push(NuevoProducto)


    let aJson = JSON.stringify(productos); 
    await fs.promises.writeFile("./productos.json", aJson, null, "\t") 
    console.log("El contenido se guardó correctamente.")
    res.json("./form.html")
})

routerProductos.put("/:id", async (req, res) => {
    const data = await fs.promises.readFile("./productos.json", "utf-8")
    const productos = JSON.parse(data)
    let id = req.params.id
    const i = productos.findIndex((P) => {
      if(P.id === id) return true
      else return false
    })
    const ProdUpd =

    productos.push(ProdUpd)
    res.json({ producto: `El producto a actualizar será:\n ${productos[i]}`}).then(res.reddirect("/:id", { mensaje: `El productos con ${id} se actualizó a:\n ${ProdUpd}`}))
})

module.exports = routerProductos