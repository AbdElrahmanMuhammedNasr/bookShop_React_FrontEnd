import React, {Component} from 'react';
import profile from './man.jpg';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Book Shop</a>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className="nav-link"  href="#">Favourite</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rent</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item ">
                                <a className="nav-link"  href="#">
                                    <img style={{
                                        width:'30px',
                                        height:'30px',
                                        borderRadius:'50%'
                                    }}  src={profile}  />
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
