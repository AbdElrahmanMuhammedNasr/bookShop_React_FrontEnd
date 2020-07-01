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
                image:'https://cdn.pixabay.com/photo/2017/12/27/18/07/book-3043275_960_720.jpg',
                name:'Go to hell',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2018/07/01/20/01/book-3510326_960_720.jpg',
                name:'Travel2',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg',
                name:'Go to hell2',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png',
                name:'Travel3',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png',
                name:'Go to hell3',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2016/04/30/13/12/texture-1362879_960_720.jpg',
                name:'Travel',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2017/12/27/18/07/book-3043275_960_720.jpg',
                name:'Go to hell',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2018/07/01/20/01/book-3510326_960_720.jpg',
                name:'Travel2',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },

            {
                image:'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg',
                name:'Go to hell2',
                description:'sometimes by accident, sometimes on purpose (injected humour and the like',
                author:'Darwin',
                rating:2,
            },
            {
                image:'https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png',
                name:'Travel3',
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
