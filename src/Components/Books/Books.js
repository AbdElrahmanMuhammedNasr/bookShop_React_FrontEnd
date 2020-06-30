import React, { Component } from "react";
import Book from "./Book/Book";
class Books extends Component{

    state ={
        Books:[
            {
                image:'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
                name:'Travel',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_960_720.jpg',
                name:'Go to hell',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
                name:'Travel2',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_960_720.jpg',
                name:'Go to hell2',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
                name:'Travel3',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_960_720.jpg',
                name:'Go to hell3',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

        ]

    }

    render() {
        return(
            <div className="row">
                {
                this.state.Books.map(e=> {
                  return(
                        <Book className="col" key={e.name} data={e}/>
                  );
                })
                }
            </div>
        );
    }

}
export  default Books
