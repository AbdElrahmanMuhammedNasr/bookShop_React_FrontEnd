import React,{Component} from 'react'
import Navbar from '../Components/NavBar/navbar'
import Slider from '../Components/Slider/Slider'
import Books from "../Components/Books/Books";

class BookShop extends Component{
        render(){
            return(
                <div>         
                    <Navbar />
                    {/*<Slider />*/}
                    <Books />

                </div>
            );
        }
}

export  default BookShop;
