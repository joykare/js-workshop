/* eslint no-underscore-dangle: ["error", { "allow": [_inputElement] }]*/
import React from 'react';

const componentName = (props) => {
  const { addMovie, handleChange } = props;

  return (
    <div className="text-lg-center">
        <h1>Movies App</h1>
        <p>Manage your movie list with our simple app.</p>

        <div className="input-group col-lg-6 offset-lg-3">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="enter movie name"
          />
          <div className="input-group-btn"> <button className="btn btn-primary" onClick={addMovie}>Add</button> </div>
        </div>
      </div>
  );
};

export default componentName;