/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default function SearchResultsItem(props) {
  const {
    title,
    thumbnail,
    onSelect,
  } = props;

  return (
    <div className="col col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12" onClick={onSelect}>
      <div className="card book-card mb-4">
        <img className="card-img-top book-card-image" src={thumbnail} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  )
}
