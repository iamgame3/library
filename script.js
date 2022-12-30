const library = document.querySelector(".library")

const myLibrary = [
    book1 = {
        bookName: "My Cool Book",
        author: "Me",
        pages: 777,
        readStatus: true
    },
    book2 = {
        bookName: "My Bad Book",
        author: "Also Me",
        pages: 321,
        readStatus: true
    },
    book3 = {
        bookName: "My Short Book",
        author: "Me, Again",
        pages: 123,
        readStatus: false
    }
];

function Book(bookName, author, pages, readStatus) {
    this.bookName = bookName
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function() {
        return `${bookName} by ${author}, ${pages} pages, ${readStatus}.`
    };
};

function addBookToLibrary() {
    // do stuff here
}

function displayBooks() {
    // Assign a varible with the number of books in the library
    const libraryBooks = myLibrary.length - 1
    // Loop through each book in the library and create a book card for it
    for (let i = 0; i < libraryBooks; i++) {
        // Select a book from the library
        const book = myLibrary[i]
        // Create a book card for the selected book
        // Create a book card div
        const newBookCard = document.createElement('div')
        newBookCard.classList.add('book-card')
        // Create a book title and add it to the book card
        const bookCardTitle = document.createElement('div')
        bookCardTitle.classList.add('book-title')
        bookCardTitle.textContent = 'Cool Title'
        newBookCard.appendChild(bookCardTitle)
        // Create a book author and add it to the book card
        const bookCardAuthor = document.createElement('div')
        bookCardAuthor.classList.add('book-author')
        bookCardAuthor.textContent = 'Cool Author'
        newBookCard.appendChild(bookCardAuthor)
        // Create a book page number and add it to the book card
        const bookCardPages = document.createElement('div')
        bookCardPages.classList.add('book-pages')
        bookCardPages.textContent = '333'
        newBookCard.appendChild(bookCardPages)
        // Create a book read status and add it to the book card
        const bookCardReadStatus = document.createElement('div')
        bookCardReadStatus.classList.add('book-read-status')
        // Check if book has been read or not
        if (book.readStatus === true) {
        bookCardReadStatus.textContent = 'Read'
        }   else bookCardReadStatus.textContent = 'Not Read'
        newBookCard.appendChild(bookCardReadStatus)
        // Add finished book card to the library
        library.appendChild(newBookCard)
    }
}

displayBooks()