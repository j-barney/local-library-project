function findAccountById(accounts, id) {
    const account = accounts.find(accId => accId.id == id);
    return account
 }
 
 function sortAccountsByLastName(accounts) {
    let lastNames = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
    return lastNames
 }
 
 function getTotalNumberOfBorrows(account, books) {
   return books.reduce((total, book) => {
     const idBorrows = book.borrows.filter(borrow => borrow.id === account.id).length
     return total + idBorrows
   }, 0)
 }
 
 function getBooksPossessedByAccount(account, books, authors) {
   const id = account.id
   let filteredBooks = books.filter(book => {
     return book.borrows.some(borrowStatus => borrowStatus.id === id && !borrowStatus.returned)
   })
 
   return filteredBooks.map(book => {
     book.author = authors.find(author => author.id === book.authorId)
     return book
   })
 }
 
 
 
 
 module.exports = {
   findAccountById,
   sortAccountsByLastName,
   getTotalNumberOfBorrows,
   getBooksPossessedByAccount,
 };