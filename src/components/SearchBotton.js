import React from "react";
import { Component } from "react";
import { BookContext } from "../context/BookContext";
import "./SearchBotton.css"

class SearchBotton extends Component {
    static contextType = BookContext;
    render() {
        const {updateAPI} = this.context;
        return (
            <div>
                <input type="text" className="searchInput" id="searchInput"></input>
                <button onClick={updateAPI} className="searchBotton">Submit</button>
            </div>
        )
    }
}

export default SearchBotton;