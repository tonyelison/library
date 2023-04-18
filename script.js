const myLibrary = ['book1', 'book2', 'book3'];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? 'was read' : 'not read yet'
  }`;
};

function displayBooks() {
  const bookList = document.querySelector('.book-list');
  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book');
    card.textContent = book;
    bookList.appendChild(card);
  });
}

displayBooks();
