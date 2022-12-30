window.onload = function() {
    const libraryElement = document.getElementById("library");
    const bookTemplateElement = document.getElementById("book-template");
    const library = [];
  
    function Book(title, author, read) {
      this.title = title;
      this.author = author;
      this.read = read;
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
      
        // Add a click event listener to the book's read status checkmark
        bookElement.querySelector(".book-read-status").addEventListener("click", () => {
          toggleReadStatus(book);
        });
      
        libraryElement.appendChild(bookElement);
      }
  
    function changeReadStatus(book, isRead) {
      let index = library.indexOf(book);
      if (index > -1) {
        library[index].read = isRead;
      } else {
        console.log("Error: Book not found in library.");
      }
    }
  
    const addBookForm = document.getElementById("add-book-form");
    addBookForm.addEventListener("submit", event => {
      event.preventDefault();
  
      const titleInput = document.getElementById("book-title-input");
      const authorInput = document.getElementById("book-author-input");
      const title = titleInput.value;
      const author = authorInput.value;
  
      const book = new Book(title, author, false);
  
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
  
