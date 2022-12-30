const myLibrary = [];

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