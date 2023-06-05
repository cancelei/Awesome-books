const addBook = document.querySelector('.book-form');







// add event listener to the form
addBook.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookTitle = addBook.title.value.trim();
    const bookAuthor = addBook.author.value.trim();
    console.log(bookTitle, bookAuthor);

});