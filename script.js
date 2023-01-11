const library = document.querySelector(".library")
const modal = document.querySelector(".book-modal")
const modalButton = document.querySelector(".new-book")
const modalClose = document.querySelector(".close-button")
const modalSubmitButton = document.querySelector(".new-book-submit")

const myLibrary = [];

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
        newBookCard.setAttribute('data-card-number', i)
        // Create a remove button
        const bookCardRemoveButton = document.createElement('div')
        bookCardRemoveButton.classList.add('remove-button')
        bookCardRemoveButton.textContent = 'Remove'
        newBookCard.appendChild(bookCardRemoveButton)
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
        // Create a book read status
        const bookCardReadStatus = document.createElement('div')
        bookCardReadStatus.classList.add('book-read-status')
        bookCardReadStatus.textContent = `${book.readStatus}`
        newBookCard.appendChild(bookCardReadStatus)
        // Create a book card read status toggle button and add it to the read status section of the book card
        const bookCardReadStatusToggle = document.createElement('button')
        bookCardReadStatusToggle.classList.add('read-status-toggle')
        bookCardReadStatus.appendChild(bookCardReadStatusToggle)
        // Add finished book card to the library
        library.appendChild(newBookCard)
    }
}

class Card {
    constructor (newName, newAuthor, newPages, newReadStatus) {
        this.name = newName
        this.author = newAuthor
        this.pages = newPages
        this.readStatus = newReadStatus
    }
}

// eslint-disable-next-line no-unused-vars
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
    // Add new book information to an obejct
    const card = new Card(newName, newAuthor, newPages, newReadStatus)
    // Add object to end of the library array
    myLibrary.push(card)
    // Redisplay all books with new book added
    displayBooks()
}

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

// Remove card if remove button is pressed
window.addEventListener('click', (event) => {
    // Check if the user clicked on the remove button
    if (event.target.classList[0] === 'remove-button') {
        // Make a variable for the book card that is the parent of the remove button that was clicked
        const selectedCard = event.target.parentElement.getAttribute('data-card-number')
        // Remove selected book card from the myLibrary array
        myLibrary.splice(selectedCard, 1)
        // Redisplay books without the removed book
        displayBooks()
    }
})

// Toggle read status if respective button is pressed
window.addEventListener('click', (event) => {
    // Check if the user clicked on the toggle button
    if (event.target.classList[0] === 'read-status-toggle') {
        // Make a varible for the data number of the book card with the button the user clicked
        const selectedBookCard = event.target.parentElement.parentElement.getAttribute('data-card-number')
        // Check if book has been read
        if (event.target.parentElement.textContent === 'Read') {
            // Change read status in myLibrary array to not read and redisplay books
            myLibrary[selectedBookCard].readStatus = 'Not Read'
            displayBooks()
        }   else {
            // Change read status in myLibrary array to read and redisplay books
            myLibrary[selectedBookCard].readStatus = 'Read'
            displayBooks()
        }
    }
})