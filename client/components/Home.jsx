/* eslint no-underscore-dangle: ["error", { "allow": [_inputElement] }]*/
import React from 'react';

const Home = () => (
  <div>
    <h1>BookShop App</h1>
    <p>Manage your book list with our simple app.</p>
  </div>);

class BookItems extends React.Component {
  render() {
    const bookEntries = this.props.entries;

    const createBooks = book => <li key={book.key}>{book.text}</li>;
    const listBooks = bookEntries.map(createBooks);
    return (
      <ul>
        {listBooks}
      </ul>
    );
  }
}

export default class BookList extends React.Component {
  getInitialState() {
    return {
      books: [],
    };
  }
  // add event handler
  addBook(e) {
    const bookArray = this.state.books;
    console.log(this.state.books);
    bookArray.push(
      {
        text: this._inputElement.value,
        key: Date.now(),
      },
  );

    this.setState({
      books: bookArray,
    });
    this._inputElement.value = '';
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <Home />
        <div className="header">
          <form onSubmit={this.addBook}>
            <input
              ref={a => this._inputElement = a}
              placeholder="enter book name"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <BookItems entries={this.state.books} />
      </div>
    );
  }
}
