import React from 'react';

const EditMovies = (props) => {
  const { handleDelete, handleUpdate, entries } = props;

  function deleteAlert(book) {
    if (confirm('Delete this movie?')) {
      handleDelete(book);
    }
  }

  return (
    <div>
      <div className="row col-md-8 offset-md-2">
        {entries.map(book => (
          <div className="card" key={book.title} style={{ width: 300, margin: 20 }}>
            <div className="card-block">
              <h4 className="card-title">{book.title}</h4>
              <p className="card-text">
                  Quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleUpdate(book.title)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {deleteAlert(book.title)}}
                style={{ marginLeft: 10 }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditMovies;
