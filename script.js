function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      // eslint-disable-next-line prefer-const
      let readStatus = this.read ? "has been read" : "not read yet";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }
  }
  
  let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
  console.log(theHobbit.info());