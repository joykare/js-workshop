/* eslint no-underscore-dangle: ["error", { "allow": [_inputElement] }]*/
import React from 'react';

const Home = () => (
  <div>
    
  </div>);

class BookItems extends React.Component {
  render() {
    console.log("props", this.props.entries);
    const bookEntries = this.props.entries;

    // const createBooks = (book) => <li key={book.key}>{book.title}</li>;
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

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      book: {}
    };
    this.addBook = this.addBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // add event handler
  addBook(e) {
    e.preventDefault();

    const bookArray = this.state.books;
    bookArray.push(
      this.state.book
    );
    this.setState({
      book: {},
      books: bookArray
    })
    console.log("books", this.state.books);
    
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      book: { 
        title: e.target.value,
        key: Date.now()
      }
    });
    console.log(this.state.bookTitle);
  }

  render() {
    return (
      <div className="todoListMain">
        <h1>BookShop App</h1>
        <p>Manage your book list with our simple app.</p>
        <div className="header">
          <form onSubmit={this.addBook}>
            <input
              onChange={this.handleChange}
              placeholder="enter book name"
            />
            <button type="submit">add</button>
          </form>
          <BookItems entries={this.state.books} />
        </div>
      </div>
    );
  }
}
