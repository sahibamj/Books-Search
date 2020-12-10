/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import BooksService from '../../services/books-service';
import BookDetails from '../home/book-details';
import Title from '../../components/title';
import './styles.css';

export default function SavedBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, selectBook] = useState(null);

  useEffect(
    () => {
      BooksService.getSavedBooks(setBooks);
    },
    [],
  );

  const onView = (id) => {
    BooksService.searchBookById(id, selectBook);
  };

  const onDelete = async (id) => {
    await BooksService.removeSavedBook(
      id,
      () => {
        BooksService.getSavedBooks(setBooks);
      },
    );
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      <BookDetails
        {...selectedBook}
        show={selectedBook !== null}
        onClose={() => selectBook(null)}
        onSave={null}
      />

      <div className="row mx-0">
        <div className="col py-4">
          <Title text="My Saved Books" />
        </div>
      </div>


      <Row className="mx-4">
        {
          books.map((book) => (
            <Col xl={6} lg={6} md={12} sm={12} xs={12} key={book.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row px-4">
                    <div className="col">
                      <h3 className="">{book.title}</h3>
                    </div>
                  </div>

                  <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}
                      className="d-flex justify-content-center book-image"
                    >
                      <img src={book.image} />
                    </Col>

                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                      <Row>
                        <Col className="d-flex flex-row">
                          <h5>Authors:</h5>
                          <span className="ml-4">{book.authors}</span>
                        </Col>
                      </Row>
                    
                      <Row>
                        <Col className="d-flex flex-row book-description">
                          <p className="">{book.description}</p>
                        </Col>
                      </Row>
                    
                      <Row>
                        <Col className="d-flex justify-content-end">
                          <Button className="mr-3" variant="danger" onClick={() => onDelete(book.id)}>Delete</Button>
                          <Button variant="info" onClick={() => onView(book.id)}>View</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>

    </div>
  )
}
