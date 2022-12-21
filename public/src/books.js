function findAuthorById(authors, id) {
    return authors.find((author) => author.id == id);
  }
  
  function findBookById(books, id) {
    return books.find((book) => book.id == id);
  }
  
  function partitionBooksByBorrowedStatus(books) {
    const borrowedOut = books.filter((book) => book.borrows[0].returned === false);
    const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
    return [borrowedOut, returnedBooks];
  }
  
  function getBorrowersForBook(book, accounts) {
    return book.borrows.map(borrow => {
      const account = accounts.find(account => account.id === borrow.id)
      account.returned = borrow.returned
      return account
    }).slice(0, 10)
  }
  
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };