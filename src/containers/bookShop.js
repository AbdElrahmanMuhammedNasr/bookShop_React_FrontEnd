import React, {Component} from 'react'
import Navbar from '../Components/NavBar/navbar'
import Books from "../Components/Books/Books";
import BookDetails from "../Components/BookDetailes/BookDetails";

import {NavLink, Route, Switch} from "react-router-dom";
import AddBook from "../Components/AddBook/AddBook";

class BookShop extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Switch>
                    <Route path='/' exact component={Books}/>
                    <Route path='/book-details' component={BookDetails}/>
                    <Route path='/add-book' component={AddBook} />
                </Switch>

                <div className="fixed-bottom">
                    <NavLink to={{
                        pathname: '/add-book'
                    }}>
                        <a className="nav-link">Add</a>

                    </NavLink>
                </div>


            </div>
        );
    }
}

export default BookShop;
