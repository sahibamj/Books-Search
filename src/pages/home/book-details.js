/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './styles.css';

export default function BookDetails(props) {
  const {
    authors,
    title,
    description,
    onClose,
    onSave,
    show,
    thumbnail,
    publisher,
    publishedDate,
    pageCount,
    averageRating,
  } = props;

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="book-details-body">
        <Row className="w-100">
          <Col className="w-100">

            <Row>
              <Col xl={4} lg={4} md={4} sm={12} xs={12}
                className="d-flex justify-content-center"
              >
                <img src={thumbnail} />
              </Col>

              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <Row>
                  <Col className="d-flex flex-row">
                    <h5>Authors:</h5>
                    <span className="ml-4">{authors}</span>
                  </Col>
                </Row>
              
                <Row>
                  <Col className="d-flex flex-row">
                    <h5>Publisher:</h5>
                    <span className="ml-4">{publisher}</span>
                  </Col>
                </Row>
              
                <Row>
                  <Col className="d-flex flex-row">
                    <h5>Publish date:</h5>
                    <span className="ml-4">{publishedDate}</span>
                  </Col>
                </Row>
              
                <Row>
                  <Col className="d-flex flex-row">
                    <h5>Page count:</h5>
                    <span className="ml-4">{pageCount}</span>
                  </Col>
                </Row>
              
                <Row>
                  <Col className="d-flex flex-row">
                    <h5>Rating:</h5>
                    <span className="ml-4">{averageRating}</span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              </Col>
            </Row>

          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>

        {
          onSave && (
            <Button variant="primary" onClick={onSave}>Save</Button>
          )
        }
      </Modal.Footer>
    </Modal>
  )
}
