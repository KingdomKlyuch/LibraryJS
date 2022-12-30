const libraryElement = document.getElementById("library");
const bookTemplateElement = document.getElementById("book-template");
const library = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;

  this.info = function() {
    let readStatus = this.read ? "has been read" : "not read yet";
    return `${this.title} by ${this.author}, ${readStatus}`;
  }
}

function addBookToLibrary(book) {
  library.push(book);
  const bookElement = document.importNode(bookTemplateElement.content, true);
  bookElement.querySelector(".book-title").textContent = book.title;
  bookElement.querySelector(".book-author").textContent = book.author;
  bookElement.querySelector(".book-read-status").checked = book.read;
  bookElement.querySelector(".book-remove-button").addEventListener("click", () => {
    resetBookElement(book);
  });

  // Add a change event listener to the book's read status checkbox
  bookElement.querySelector(".book-read-status").addEventListener("change", () => {
    changeReadStatus(book, event.target.checked);
  });

  libraryElement.appendChild(bookElement);
}

function resetBookElement(book) {
  let index = library.indexOf(book);
  if (index > -1) {
    library[index] = new Book("Title", "Author", false);
    const bookElement = libraryElement.querySelector(`[data-book-id="${book.id}"]`);
    bookElement.querySelector(".book-title").textContent = "Title";
    bookElement.querySelector(".book-author").textContent = "Author";
    bookElement.querySelector(".book-read-status").checked = false;
  } else {
    console.log("Error: Book not found in library.");
  }
}

function changeReadStatus(book, isRead) {
  let index = library.indexOf(book);
  if (index > -1) {
    library[index].read = isRead;
  } else {
    console.log("Error: Book not found in library.");
  }
}

