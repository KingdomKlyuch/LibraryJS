const libraryElement = document.getElementById("library");
const bookTemplateElement = document.getElementById("book-template");
const addBookFormElement = document.getElementById("add-book-form");
const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    let readStatus = this.read ? "has been read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
}

function addBookToLibrary(book) {
  if (library.length >= 8) {
    console.log("Error: Library is full. Cannot add more books.");
  } else {
    library.push(book);
    const bookElement = document.importNode(bookTemplateElement.content, true);
    bookElement.querySelector(".book-title").textContent = book.title;
    bookElement.querySelector(".book-author").textContent = book.author;
    bookElement.querySelector(".book-read-status").checked = book.read;
    bookElement.querySelector(".book-remove-button").addEventListener("click", () => {
      removeBookFromLibrary(book);
    });

function removeBookFromLibrary(book) {
  let index = library.indexOf(book);
  if (index > -1) {
    library.splice(index, 1);
    libraryElement.removeChild(book.element);
  } else {
    console.log("Error: Book not found in library.");
  }
}

function changeReadStatus(book, isRead) {
  let index = library.indexOf(book);
  if (index > -1) {
    library[index].isRead = isRead;
  } else {
    console.log("Error: Book not found in library.");
  }
}

addBookFormElement.addEventListener("submit", event => {
  event.preventDefault();

  const title = event.target.elements["book-title-input"].value;
  const author = event.target.elements["book-author-input"].value;

  const book = {
    title: title,
    author: author,
    isRead: false
  };

  addBookToLibrary(book);
});

