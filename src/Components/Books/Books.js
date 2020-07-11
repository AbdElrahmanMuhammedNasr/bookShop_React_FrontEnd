import React, {Component} from "react";
import Book from "./Book/Book";
import axios from 'axios';

class Books extends Component {

    state = {
        Books: null
    }

    componentDidMount() {
        axios.get('http://localhost:3100/get-books',
            {
                headers: {'auth-token': `bearer ${localStorage.getItem('Token')}`}
            }
            )
            .then((respone) => {
                    // console.log(respone.data)
                    this.setState({
                        Books: respone.data
                    });
                }
            ).catch(error => {
                console.log('not allow')
            }
        );
    }

    render() {
        if (this.state.Books === null || this.state.Books == undefined) {
            return (
                <div style={{margin: '40vh 50vw'}}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );

        } else {
            return (
                <div className="row">
                    {
                        this.state.Books.map(e => {
                            return (
                                <Book className="col" key={e.name} data={e}/>
                            );
                        })
                    }
                </div>
            );

        }

    }

}

export default Books
