import React from 'react';

export default function SearchBox(props) {
  const {
    searchText,
    setSearchText,
    onKeyDown,
  } = props;

  return (
    <div className={`card active w-100 border border-dark`}>
      <div className="card-body">
        <div className="row mx-0">
          <div className="col py-4 d-flex justify-content-center align-items-center w-100">

            <input
              className="form-control mr-4"
              type="text"
              placeholder="Search for books"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => onKeyDown(event.key)}
            />

          </div>
        </div>     
      </div>
    </div>
  )
}
