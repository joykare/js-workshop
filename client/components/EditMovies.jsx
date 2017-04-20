import React from 'react';

const EditMovies = (props) => {
  const { handleDelete, handleUpdate, entries } = props;
  return (
    <div>
      <div className='row col-lg-6 offset-lg-4'>
        {entries.map(book => (
          <div className='card' key={book.title} style={{ width: 300, margin:20 }}>
            <div className="card-block">
              <h4 className="card-title">{book.title}</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary" onClick={() => handleUpdate(book.title)}>Update</button>
              <button className="btn btn-danger" onClick={() => handleDelete(book.title)} style={{marginLeft: 10}}>Delete</button>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default EditMovies;