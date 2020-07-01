import React from 'react';
import './App.css';
import BookShop from './containers/bookShop';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <BookShop/>
        </BrowserRouter>
    );
}

export default App;
