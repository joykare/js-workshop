import React, { Component } from 'react';
import EditMovies from '../components/EditMovies.jsx';

class EditMoiesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete = (event) => {
    console.log("Delete");
  }

  handleUpdate = (event) => {
    console.log("update");
  }
  
  render() {
    return (
      <div>
        <EditMovies 
          handleDelete={this.handleDelete} 
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default EditMoiesContainer;