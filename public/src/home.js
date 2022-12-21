 
 function getTotalBooksCount(books) {
    let totalBooks = 0;
    for (let book in books) {
      totalBooks += 1;
    }
    return totalBooks;
  }
  
  function getTotalAccountsCount(accounts) {
     let totalAccounts = 0;
    for (let account in accounts) {
      totalAccounts += 1;
    }
    return totalAccounts;
  }
  
  function getBooksBorrowedCount(books) {
      return books.reduce((count, book) => count + (!book.borrows[0].returned), 0)
    }
  
  function sortTopFive(array) {
    array.sort((a, b) => b.count - a.count);
    let topFive = array.slice(0,5);
    return topFive;
  }
  
  function getMostCommonGenres(books) {
    let genres = []
    books.forEach(book => {
      let existingGenre = genres.find(genre => genre.name === book.genre)
      if (existingGenre === undefined){
          genres.push({name: book.genre, count: 1})
      } else {
        genres.forEach(genre => {
          if (genre.name === existingGenre.name) {
            genre.count++
          }
        })
      }
    })
    let topFive = sortTopFive(genres)
    return topFive
  }

function getMostPopularBooks(books) {
    let popBooks = []
    books.forEach(book => { 
      let borrows = book.borrows
      popBooks.push({name: book.title, count: borrows.length})
    })
    let topFive = sortTopFive(popBooks)
    return topFive
}

function getMostPopularAuthors(books, authors) {
    const popAuthors = [];
      authors.forEach(author => {
        let borrowed = 0;
        books.forEach(book => author.id === book.authorId ? borrowed += book.borrows.length : borrowed += 0);
        popAuthors.push({name: `${author.name.first} ${author.name.last}`, count: borrowed});
  });
    let topFive = sortTopFive(popAuthors)
    return topFive
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
