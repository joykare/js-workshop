/* eslint no-underscore-dangle: ["error", { "allow": [_inputElement] }]*/
import React from 'react';

export default class MovieList extends React.Component {
  render() {
    const bookEntries = this.props.entries;

    const listBooks = bookEntries.map(book => (
      <li key={book.key}>{book.title}</li>
    ));
    return (
      <ul>
        {listBooks}
      </ul>
    );
  }
}
