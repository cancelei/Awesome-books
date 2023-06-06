const addBook = document.querySelector('.book-form');
const bookShelf = document.querySelector('.items');

const store = localStorage.getItem('bookCollection');
const bookCollection = JSON.parse(store) || [];

const renderBooks = () => {
  bookShelf.innerHTML = '';

  bookCollection.forEach((book, index) => {
    const html = `
      <article class="book-list">
        <ul class="book-details">
          <li class="title-list">
            <span>${book.title}</span>
          </li>
          <li class="author-list">
            <span>${book.author}</span>
          </li>
        </ul>
        <button type="submit" class="remove" data-index="${index}">Remove</button>
      </article>
    `;

    bookShelf.innerHTML += html;
  });
};

renderBooks();

addBook.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = addBook.title.value.trim();
  const bookAuthor = addBook.author.value.trim();

  if (bookTitle.length && bookAuthor.length) {
    bookCollection.push({ title: bookTitle, author: bookAuthor });
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    renderBooks();

    addBook.reset();
  }
});

bookShelf.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const index = e.target.dataset.index;
    bookCollection.splice(index, 1);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    renderBooks();
  }
});
