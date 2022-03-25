class User {
    constructor (name, lastname) {
      this.name = name
      this.lastname = lastname
      this.books = []
      this.pets = []
    }
  
    addPets (newPets) {
      this.pets.push(newPets)
    }
  
    addBook (bookName, bookAuthor) {
      this.books.push({ name: bookName, author: bookAuthor })
    }
  
    getBooksName () {
      return Object.keys(this.books).map(key => this.books[key].name)
    }
  
    getBooks () {
      return this.books
    }
  
    getCountPets () {
      return this.pets.length
    }
  
    getUserName (name, lastname) {
      return ` ${name} ${lastname}`
    }
  }
  
  const user = new User()
  
  user.addPets('Perro')
  user.addPets('Ratas')
  user.addPets('Conejo')
  user.addPets('Hamster')
  user.addBook("El perfume", 'Patrick Süskind')
  user.addBook('It', 'Stephen King')
  
  const FullName = user.getUserName('Micaela', 'Mayer')
  const BooksName = user.getBooksName()
  const CountPets = user.getCountPets()
  
  console.log('Full Name', FullName)
  console.log('Books', BooksName)
  console.log('Counter Pets', CountPets)