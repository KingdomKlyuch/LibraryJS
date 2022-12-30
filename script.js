window.onload = function() {
    const libraryElement = document.getElementById("library");
    const bookTemplateElement = document.getElementById("book-template");
    const library = [];
  
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
      }
  
function addBookToLibrary(book) {
  library.push(book);
  const bookElement = document.importNode(bookTemplateElement.content, true);
  bookElement.querySelector(".book-title").textContent = book.title;
  bookElement.querySelector(".book-author").textContent = book.author;
  bookElement.querySelector(".book-pages").textContent = `${book.pages} pages`;
  bookElement.querySelector('[name="book-read-status"]').checked = book.read;
  bookElement.querySelector(".book-remove-button").addEventListener("click", () => {
    resetBookElement(book);
  });

  // Add a click event listener to the book's read status checkmark
  bookElement.querySelector('[name="book-read-status"]').addEventListener("click", () => {
    toggleReadStatus(book);
  });

  libraryElement.appendChild(bookElement);
}



    function toggleReadStatus(book) {
        book.read = !book.read;
      }
      
  
      const addBookForm = document.getElementById("add-book-form");
      addBookForm.addEventListener("submit", event => {
        event.preventDefault();
      
        const titleInput = document.getElementById("book-title-input");
        const authorInput = document.getElementById("book-author-input");
        const pagesInput = document.getElementById("book-pages-input");
        const title = titleInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;
      
        const book = new Book(title, author, pages, false);
      
        addBookToLibrary(book);
      });
      

    function resetBookElement(book) {
        const bookElements = Array.from(libraryElement.querySelectorAll(".book"));
        const bookElement = bookElements.find(element => element.querySelector(".book-title").textContent === book.title);
        libraryElement.removeChild(bookElement);
        const index = library.indexOf(book);
        if (index > -1) {
          library.splice(index, 1);
        }
      }

  }
  
