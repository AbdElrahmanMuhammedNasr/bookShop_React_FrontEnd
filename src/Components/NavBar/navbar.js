import React, {Component} from 'react';
import profile from './man.jpg';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: '5px'}}>
                <div className="container-fluid ">
                    <NavLink to={{
                        pathname: '/'
                    }}> <a className="navbar-brand">Book Shop</a>
                    </NavLink>
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">
                                    <img style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%'
                                    }} src={profile}/>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
