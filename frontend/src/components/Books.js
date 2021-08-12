import React, { Component } from "react";
import axios from "axios";
import BookItem from "./BookItem";

/*const axios = require('axios').default;*/

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false,
  };

  //lifecycle method
  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/books")
      .then((res) =>
        this.setState({
          books: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    //console.log(this.state);
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
            /* <h4>{ book.title.rendered }</h4>*/
          ))}
        </div>
      );
    }

    return <h3> Loading ...</h3>;
  }
}

export default Books;
