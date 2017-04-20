/* eslint no-underscore-dangle: ["error", { "allow": [_inputElement] }]*/
import React from 'react';
import MovieList from '../components/MovieList.jsx';

export default class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {},
    };
    this.addMovie = this.addMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // add event handler
  addMovie(e) {
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

  handleChange(e) {
    e.preventDefault();
    this.setState({
      movie: {
        title: e.target.value,
        key: Date.now(),
      },
    });
  }

  render() {
    return (
      <div className="movieListMain">
        <h1>Movies App</h1>
        <p>Manage your movie list with our simple app.</p>
        <div className="header">
          <form onSubmit={this.addMovie}>
            <input
              onChange={this.handleChange}
              placeholder="enter movie name"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <div className="movielist">
          <MovieList entries={this.state.movies} />
        </div>
      </div>
    );
  }
}
