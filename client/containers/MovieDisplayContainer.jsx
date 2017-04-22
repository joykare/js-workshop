import React, { Component } from 'react';
import AddMovieForm from '../components/AddMovieForm.jsx';
import EditMovies from '../components/EditMovies.jsx';

class MovieDisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {},
    };
    this.addMovie = this.addMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  addMovie = (e) => {
    e.preventDefault();

    const movieArray = this.state.movies;
    movieArray.push(
      this.state.movie,
    );
    this.setState({
      movie: {},
      movies: movieArray,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      movie: {
        title: e.target.value
      },
    });

    e.target.value = '';
  }

  handleDelete = (title) => {
    console.log(this.state.movies);
    const movies = this.state.movies;
    const movieArray = movies.filter((movie) => movie.title !== title );

    this.setState({
      movies: movieArray
    });
  }

  handleUpdate = (event) => {
    console.log("update");
  }
  
  render() {
    return (
      <div>
        <AddMovieForm 
          addMovie={this.addMovie}
          handleChange={this.handleChange}
        />
        <EditMovies
          entries={this.state.movies}
          handleDelete={this.handleDelete} 
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default MovieDisplayContainer;