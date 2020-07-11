import React, {Component} from 'react'
import Navbar from '../Components/NavBar/navbar'
import Books from "../Components/Books/Books";
import BookDetails from "../Components/BookDetailes/BookDetails";

import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import AddBook from "../Components/AddBook/AddBook";
import Login from "../Components/Login/Login";

class BookShop extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Switch>
                    {/*<Redirect from='/' to='login' />*/}
                    <Route path='/home' exact component={Books}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/book-details' component={BookDetails}/>
                    <Route path='/add-book/:bookName' component={AddBook} />
                </Switch>

                <div className="fixed-bottom">
                    <NavLink to={{
                        pathname: '/add-book'
                    }}>
                        <button className='rounded btn btn-primary'>Add</button>

                    </NavLink>
                </div>


            </div>
        );
    }
}

export default BookShop;
