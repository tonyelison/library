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

const bookList = document.querySelector('.book-list');

function displayBook(book) {
  const card = document.createElement('div');
  card.classList.add('book');
  card.textContent = book;
  bookList.appendChild(card);
}

function displayAllBooks() {
  myLibrary.forEach((book) => displayBook(book));
}

function addBook(book) {
  myLibrary.push(book);
  displayBook(book);
}

const addButton = document.querySelector('button');
addButton.addEventListener('click', () => {
  addBook(prompt('book title please:', 'default'));
});

displayAllBooks();
