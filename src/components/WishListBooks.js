import { Component } from "react";
import React from "react";
import { BookContext } from "../context/BookContext";
import "./WishListBooks.css"

class WishListBooks extends Component {
    static contextType = BookContext;
    render() {
        const {removeBook} = this.context;
        const {title} = this.props;
        return (
            <div>
                {title}
                <button id={title} class="removeBotton" value="Remove Book" onClick={removeBook}>Remove Book</button>
            </div>
        );
    }
}

export default WishListBooks;