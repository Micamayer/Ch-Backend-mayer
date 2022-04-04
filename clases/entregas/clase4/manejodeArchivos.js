const fs = require('fs')

class Container {
  constructor(fileName) {
    this.fileName = fileName
  }

  async save(product) {
    try {
      const allProducts = JSON.parse(await fs.promises.readFile(`${this.fileName}.json`, 'utf-8'))
      product.id = allProducts.length + 1
      allProducts.push(product)
      await fs.promises.writeFile(`${this.fileName}.json`, JSON.stringify(allProducts), 'utf-8')
    } catch (error) {
      console.log(error)
    } finally {
      console.log('ID:', product.id)
      console.log('save method finished successfully!')
      console.log('----------------------------------')
      return product.id
    }
  }

  async getById(id) {
    try {
      const allProducts = JSON.parse(await fs.promises.readFile(`${this.fileName}.json`, 'utf-8'))
      const productFound = allProducts.find((product) => product.id === id)
      if (!productFound) {
        console.log(null)
        return null
      } else {
        console.log(productFound)
        return productFound
      }
    } catch (error) {
      console.log(error)
    } finally {
      console.log('getById method finished successfully!')
      console.log('-------------------------------------')
    }
  }

  async getAll() {
    try {
      const allProducts = JSON.parse(await fs.promises.readFile(`${this.fileName}.json`, 'utf-8'))
      if (allProducts.length) {
        console.log('Products:', allProducts)
        return allProducts
      } else {
        console.log('There are no products in the list.')
      }
    } catch (error) {
      console.log(error)
    } finally {
      console.log('getAll method finished successfully!')
      console.log('------------------------------------')
    }
  }

  async deleteById(id) {
    try {
      const allProducts = JSON.parse(await fs.promises.readFile(`${this.fileName}.json`, 'utf-8'))
      const filteredProductList = allProducts.filter((product) => product.id !== id)
      if (JSON.stringify(allProducts) === JSON.stringify(filteredProductList)) {
        console.log(`The product with ID ${id} does not exist.`)
      } else {
        await fs.promises.writeFile(
          `${this.fileName}.json`,
          JSON.stringify(filteredProductList),
          'utf-8'
        )
        console.log(`The product with ID ${id} has been removed.`)
      }
    } catch (error) {
      console.log(error)
    } finally {
      console.log('deleteById method finished successfully!')
      console.log('----------------------------------------')
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(`${this.fileName}.json`, JSON.stringify([]), 'utf-8')
    } catch (error) {
      console.log(error)
    } finally {
      console.log('deleteAll method finished successfully!')
      console.log('---------------------------------------')
    }
  }
}

const container = new Container('productos')

const product_1 = {
  title: 'Escuadra',
  price: 100,
}
const product_2 = {
  title: 'Calculadora',
  price: 500,
}
const product_3 = {
  title: 'Globo Terráqueo',
  price: 1000,
}