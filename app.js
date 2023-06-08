class BookCollection {
  constructor() {
    this.addBookForm = document.querySelector('.book-form');
    this.bookShelf = document.querySelector('.items');
    this.bookCollection = this.loadBookCollection() || [];

    this.renderBooks();
    this.addBookForm.addEventListener('submit', this.addBookToCollection.bind(this));
    this.bookShelf.addEventListener('click', this.handleBookRemoval.bind(this));
  }

  loadBookCollection() {
    const store = localStorage.getItem('bookCollection');
    this.bookCollection = JSON.parse(store);
    return JSON.parse(store);
  }

  saveBookCollection() {
    localStorage.setItem('bookCollection', JSON.stringify(this.bookCollection));
  }

  renderBooks() {
    this.bookShelf.innerHTML = '';

    this.bookCollection.forEach((book, index) => {
      const html = `
        <article class="book-list">
          <ul class="book-details">
            <li class="title-list">
              <span>"${book.title}"</span>
            </li>
            <li class="author-list">
              <span> by ${book.author}</span>
            </li>
          </ul>
          <button type="submit" class="remove" data-index="${index}">Remove</button>
        </article>
      `;

      this.bookShelf.innerHTML += html;
    });
  }

  addBookToCollection(e) {
    e.preventDefault();
    const bookTitle = this.addBookForm.title.value.trim();
    const bookAuthor = this.addBookForm.author.value.trim();

    if (bookTitle.length && bookAuthor.length) {
      this.bookCollection.push({ title: bookTitle, author: bookAuthor });
      this.saveBookCollection();
      this.renderBooks();

      this.addBookForm.reset();
    }
  }

  handleBookRemoval(e) {
    if (e.target.classList.contains('remove')) {
      const { index } = e.target.dataset;
      this.bookCollection.splice(index, 1);
      this.saveBookCollection();
      this.renderBooks();
    }
  }
}

const bookcollectionApp = new BookCollection();
bookcollectionApp();

// Creating the Navigation functionallity

// Nav items
const nav_list = document.querySelector('.nav_list');
const nav_add = document.querySelector('.nav_add');
const nav_contact = document.querySelector('.nav_contact');

// Section Classes
const items = document.querySelector('.items');
const book_form = document.querySelector('.book_form');
const contact = document.querySelector('.contact');

//  Navigation Event listeners


const navigation = document.querySelector('.navigation');

// navigation.addEventListener('click', () => {
  
// })

nav_list.addEventListener('click', () => {
  items.classList.remove('hidden');
  book_form.classList.add('hidden');
  contact.classList.add('hidden');
});

nav_add.addEventListener('click', () => {
  book_form.classList.remove('hidden');
  items.classList.add('hidden');
  contact.classList.add('hidden');
});

contact.addEventListener('click', () => {
  contact.classList.remove('hidden');
  book_form.classList.add('hidden');
  items.classList.toggle('hidden');
})