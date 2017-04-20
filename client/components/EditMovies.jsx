import React from 'react';

const EditMovies = (props) => {
  const {handleDelete, handleUpdate} = props;
  return (
    <div>
      <div className='card' style={{margin:500, width: 300}}>
        <div className="card-block">
          <h4 className="card-title">Orange is the new Black</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
          <button className="btn btn-danger" onClick={handleDelete} style={{marginLeft: 10}}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EditMovies;