const addBook = document.querySelector('.book-form');
const bookShelf = document.querySelector('.items');

// create a function to render the book
const generateBook = (bookTitle, bookAuthor) => {
  const html = ` 
 <article class="book-list">
        <ul class="book-details" >
            <li class="title-list">
        <span>
        ${bookTitle}
        </span>
            </li>
            <li class="author-list">
        <span>
        ${bookAuthor}
        </span>
            </li>
        </ul>
        <button type="submit" class="remove">Remove</button>
    </article>
  `;

  bookShelf.innerHTML += html;
};

// add event listener to the form
addBook.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = addBook.title.value.trim();
  const bookAuthor = addBook.author.value.trim();

  // check if the input is not empty
  if (bookTitle.length && bookAuthor.length) {
    generateBook(bookTitle, bookAuthor);

    // reset the form
    addBook.reset();
  }
});

// remove the book from the list
bookShelf.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
  }
});