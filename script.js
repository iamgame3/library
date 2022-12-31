const library = document.querySelector(".library")
const modal = document.querySelector(".book-modal")
const modalButton = document.querySelector(".new-book")
const modalClose = document.querySelector(".close-button")
const modalSubmitButton = document.querySelector(".new-book-submit")

const myLibrary = [
    {
        name: "My Cool Book",
        author: "Me",
        pages: 777,
        readStatus: true
    },
    {
        name: "My Bad Book",
        author: "Also Me",
        pages: 321,
        readStatus: true
    },
    {
        name: "My Short Book",
        author: "Me, Again",
        pages: 123,
        readStatus: false
    }
];

function displayBooks() {
    // Remove all book cards from the library
    library.replaceChildren()
    // Assign a varible with the number of books in the library
    const libraryBooks = myLibrary.length
    // Loop through each book in the library and create a book card for it
    for (let i = 0; i < libraryBooks; i += 1) {
        // Select a book from the library
        const book = myLibrary[i]
        // Create a book card for the selected book
        // Create a book card div
        const newBookCard = document.createElement('div')
        newBookCard.classList.add('book-card')
        // Create a book title and add it to the book card
        const bookCardTitle = document.createElement('div')
        bookCardTitle.classList.add('book-title')
        bookCardTitle.textContent = book.name
        newBookCard.appendChild(bookCardTitle)
        // Create a book author and add it to the book card
        const bookCardAuthor = document.createElement('div')
        bookCardAuthor.classList.add('book-author')
        bookCardAuthor.textContent = book.author
        newBookCard.appendChild(bookCardAuthor)
        // Create a book page number and add it to the book card
        const bookCardPages = document.createElement('div')
        bookCardPages.classList.add('book-pages')
        bookCardPages.textContent = `${book.pages} Pages`
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

function addBookToLibrary() {
    // Find values of all inputs and assign varibles to them
    const newName = document.getElementById('book-name').value
    const newAuthor = document.getElementById('book-author').value
    const newPages = document.getElementById('book-pages').value
    let newReadStatus = document.getElementById('book-read-status').checked
    if (newReadStatus) {
        newReadStatus = 'Read'
    }   else {
        newReadStatus = 'Not Read'
    }
    // Add new book information to the end of the library array
    myLibrary.push(
        {
            name: newName,
            author: newAuthor,
            pages: newPages,
            readStatus: newReadStatus
        }
    )
    displayBooks()
}

displayBooks()

// Bring up cleared form modal when new book button is clicked
modalButton.addEventListener('click', () => {
    // Show form modal
    modal.style.display = 'block'
    // Reset all input values
    document.getElementById('book-name').value = ''
    document.getElementById('book-author').value = ''
    document.getElementById('book-pages').value = ''
    document.getElementById('book-read-status').checked = true
})

// Close form modal if user clicks off of it
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})

// Close form modal if user clicks X button
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})


// Close form modal if submit button is clicked and form is filled out
modalSubmitButton.addEventListener('click', () => {
    // Get validity status of all text inputs
    const newName = document.getElementById('book-name').validity.valid
    const newAuthor = document.getElementById('book-author').validity.valid
    const newPages = document.getElementById('book-pages').validity.valid
    // If all text inputs are filled out, close the form modal
    if (newName && newAuthor && newPages) {
        modal.style.display = 'none'
    }
})