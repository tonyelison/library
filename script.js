const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = myLibrary.length;
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

function removeBook(book) {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  const bookCard = document.getElementById(`book-${book.id}`);
  bookList.removeChild(bookCard);
}

function displayBook(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = `book-${book.id}`;

  Object.keys(book).forEach((key) => {
    const bookAttr = document.createElement('div');
    bookAttr.classList.add('book-attribute');

    const label = document.createElement('label');
    label.textContent = `${key}:`;

    const value = document.createElement('span');
    value.textContent = book[key];

    bookAttr.append(label, value);
    card.appendChild(bookAttr);
  });

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove Book';
  removeBtn.addEventListener('click', () => removeBook(book));

  card.appendChild(removeBtn);

  bookList.appendChild(card);
}

function displayAllBooks() {
  myLibrary.forEach((book) => displayBook(book));
}

function addBook(book) {
  myLibrary.push(book);
  displayBook(book);
}

const formModal = document.querySelector('.modal-overlay');
const form = document.forms.AddBookForm;

const openFormBtn = document.querySelector('.open-form-btn');
openFormBtn.addEventListener('click', () => {
  formModal.style.display = 'flex';
});

const submitFormBtn = document.querySelector('form button[type="submit"]');
submitFormBtn.addEventListener('click', (event) => {
  const formData = new FormData(form);

  addBook(new Book(
    myLibrary.length,
    formData.get('title'),
    formData.get('author'),
    formData.get('pages'),
    formData.get('read'),
  ));

  formModal.style.display = 'none';
  form.reset();
  event.preventDefault();
});

const closeFormBtn = document.querySelector('form button.close');
closeFormBtn.addEventListener('click', () => {
  formModal.style.display = 'none';
  form.reset();
});

displayAllBooks();
