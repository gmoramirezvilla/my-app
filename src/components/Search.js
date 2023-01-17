import { Component } from "react";
import {BookContext} from "../context/BookContext";
import SearchBotton from "./SearchBotton";
import SearchedBooks from "./SearchedBooks";

class Search extends Component{
    static contextType = BookContext;
    render(){
        const{searhReturn, addBook} = this.context;
        return(
            <div className="books">
                <SearchBotton />
                <div className="flex-container">
                    {searhReturn.length === 0? 
                    <li className="book__placeholder">No Search</li> : 
                    searhReturn.items.map((book) => (
                        <SearchedBooks
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            publisher={book.volumeInfo.publisher}
                            publishDate={book.volumeInfo.publishDate}
                            description={book.volumeInfo.description}
                            thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        />
                    ))}
                </div>
            </div>    
        );
    }
}


export default Search;
