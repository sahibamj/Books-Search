import GoogleBooksSearch from 'google-books-search';
import GOOGLE_CONFIG from '../config';

const BooksService = {
  searchBooks(searchText, callback) {
    GoogleBooksSearch.search(searchText, GOOGLE_CONFIG, function(_, results) {
      const formattedBooks = results.map((book) => {
        const {
          id,
          authors,
          title,
          thumbnail,
          description,
          link,
          pageCount,
          averageRating,
          categories,
          publisher,
          publishedDate,
        } = book;

        return {
          id,
          authors,
          title,
          thumbnail,
          description,
          link,
          pageCount,
          averageRating,
          categories,
          publisher,
          publishedDate,
        };
      });

      callback(() => formattedBooks);
    });
  },

  searchBookById(id, callback) {
    GoogleBooksSearch.lookup(id, GOOGLE_CONFIG, function(_, result) {
      const {
        id,
        authors,
        title,
        thumbnail,
        description,
        link,
        pageCount,
        averageRating,
        categories,
        publisher,
        publishedDate,
      } = result;
      callback({
        id,
        authors,
        title,
        thumbnail,
        description,
        link,
        pageCount,
        averageRating,
        categories,
        publisher,
        publishedDate,
      });
    });
  },

  saveBook(book, callback) {
    const {
      id,
      authors,
      title,
      thumbnail,
      description,
      link,
    } = book;

    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      body: JSON.stringify({
        id,
        authors,
        title,
        image: thumbnail,
        description,
        link,
      }),
      headers: { "Content-Type": "application/json" }
    });

    callback();
  },

  async removeSavedBook(id, callback) {
    await fetch(`http://localhost:8080/api/books/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });

    callback();
  },

  async getSavedBooks(callback) {
    const response = await fetch('http://localhost:8080/api/books');
    const formattedResponse = await response.json();
    callback(formattedResponse);
  }
}

export default BooksService;
