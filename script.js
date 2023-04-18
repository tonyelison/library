const myLibrary = [];

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

const submitFormBtn = document.querySelector('form button');
submitFormBtn.addEventListener('click', (event) => {
  const form = document.forms.AddBookForm;
  const formData = new FormData(form);
  const book = new Book(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('read'));
  addBook(book.title);

  form.reset();
  event.preventDefault();
});

displayAllBooks();
