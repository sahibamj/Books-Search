/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import Title from '../../components/title';
import SearchBox from './search-box';
import SearchResultsItem from './search-results-item';
import BookDetails from './book-details';
import BooksService from '../../services/books-service';
import './styles.css';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, selectBook] = useState(null);

  const onKeyDown = (key) => {
    if (key !== 'Enter') {
      return;
    }

    if (searchText === '') {
      setBooks(() => []);
      return;
    }

    BooksService.searchBooks(searchText, setBooks);
  };

  const onSelectBook = (book) => {
    selectBook(book);
  };

  const onSaveBook = () => {
    BooksService.saveBook(selectedBook, () => selectBook(null));
  };

  return (
    <div style={{ paddingBottom: '100px' }}>

      <BookDetails
        {...selectedBook}
        show={selectedBook !== null}
        onClose={() => selectBook(null)}
        onSave={() => onSaveBook()}
      />

      <div className="row mx-0">
        <div className="col pt-4 d-flex justify-content-center align-items-center w-100">
          <Title text="Book Search" />
        </div>
      </div>

      <div className="row mx-0">
        <div className="col py-4 d-flex justify-content-center align-items-center w-100">
          <SearchBox searchText={searchText} onKeyDown={onKeyDown} setSearchText={setSearchText} />
        </div>
      </div>

      <div className="row mx-0 h-100">
        <div className="col py-4 d-flex justify-content-center align-items-center w-100 h-100">
          <div className={`card active w-100 h-100 border border-success`}>
            <div className="card-body h-100">
              <div className="row mx-0 my-3">

                {
                  books.map((book) => (
                    <SearchResultsItem
                      key={book.id}
                      {...book}
                      onSelect={() => onSelectBook(book)}
                      onSave={() => onSaveBook(book)}
                    />
                  ))
                }
              </div>     
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
