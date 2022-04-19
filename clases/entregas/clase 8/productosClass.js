const fs = require("fs")

class ProductosClass {
    constructor(NombreArchivo){
        this.nombreArchivo = NombreArchivo
    }

    async save(Prod){ 
        const data = await fs.promises.readFile(this.nombreArchivo, "utf-8")
        const productos = JSON.parse(data)
        let Id = 1
        if(Prod.id) Id = Prod.id 
            else if (productos.length === 0) Id 
        else Id = productos[productos.length - 1].id + 1 
        console.log(`La id del producto que se ingresó: ${Id}`) 

        const PNuevo = { //nuevo producto
            id: Id,
            name: Prod.name,
            value: Prod.value,
            link: Prod.link
          };
          await productos.push(PNuevo)
      
        let aJson = JSON.stringify(productos); 
        await fs.promises.writeFile(this.nombreArchivo, aJson, null, "\t")
        console.log("El contenido se guardó correctamente.")
        }

}
module.exports = ProductosClass