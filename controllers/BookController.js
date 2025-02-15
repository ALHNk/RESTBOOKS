const BookEntity = require('../entities/BookEntity')

class BookController
{
    constructor()
    {        
        this.books = [
            new BookEntity("Heir to the Empire", "Timothy Zahn", 1991, "Sci-fi"),
            new BookEntity("Don Quixote", "Miguel de Cervantes", 1605, "Novel"),
            new BookEntity("War and Peace", "Leo Tolstoy", 1867, "Historical Novel"),
            new BookEntity("1984", "George Orwell", 1949, "Sci-fi"),
            new BookEntity("In Search of the Castaways", "Jules Verne", 1867, "Adventure")
        ];;
    }

    async create(book)
    {
        this.books.push(book);
    }
    
    async read()
    {
        return this.books;
    }

    async update(id, book)
    {
        id = Number(id);
        
        if(id > this.books.length + 1 || id < 1)
        {
            return -1;
        }
        this.books[id-1] = book;
        return 1
    }
    async delete(id)
    {
        id = Number(id);
        if(id >= this.books.length +1 || id < 1)
        {
            return -1;
        }
        this.books.splice(id-1, 1)
        return 1;
    }

}

module.exports = new BookController();