import React, {Component} from "react";
import axios from 'axios';


class BookDetails extends Component {
    state = {
        book:null
    }
    componentDidMount() {
        axios.get(`http://localhost:3100/get-book/${this.props.location.search.split("?")[1]}`,
            {
                headers: {'auth-token': `bearer ${localStorage.getItem('Token')}`}

            })
        .then( respone =>{
            console.log(respone.data)
            this.setState({
                book : respone.data
            })
        })
        .catch()
    }

render()
{
    if(this.state.book == null){
        return (
            <div  style={{margin:'40vh 50vw'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }else{
    return (
        // console.log(this.props.location.search.split('?')[1]),
            <div>
                <div className='row' style={{padding: '20px', backgroundColor: ''}}>
                    <section className='col'>
                        <img style={{
                            width: '100%'
                        }} src={this.state.book.image}/>
                    </section>
                    <section className='col' style={{backgroundColor: '', overflow: 'hidden',}}>

                        <div className="card">
                            <div className="card-header">
                                {this.state.book.name}
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <section className='row'>
                                        <p className='col text-muted'>By {this.state.book.author}  </p>
                                        <p className='col text-muted'>format: {this.state.book.format} </p>
                                    </section>

                                    <section className='row'>
                                        <footer className="blockquote-footer col">Rating {this.state.book.rating}</footer>
                                        <footer className="blockquote-footer col">{this.state.book.numOFRating} ratings</footer>
                                    </section>

                                </blockquote>
                            </div>
                        </div>


                        <div className="card" style={{marginTop: '20px'}}>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p className='col text-muted'>Type: Police </p>
                                    <p className='col text-muted'>Price: {this.state.book.price} EGP </p>
                                    <p className='col text-muted'>Rent: 10 EGP Per Day </p>
                                    <footer className='row'>
                                        <button className='btn btn-primary col' style={{margin: '20px'}}>Buy Book
                                        </button>
                                        <button className='btn btn-secondary col' style={{margin: '20px'}}>Rent Book
                                        </button>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>


                    </section>
                </div>

                <hr/>

                <div className='border border-primary rounded' style={{maxWidth: '1000px', margin: 'auto',}}>
                    <p className='text-center'>Additional Information</p>

                    <table className="table table-striped table-active" style={{maxWidth: '900px', margin: 'auto',}}>

                        <tbody>
                        <tr>
                            <td>Hardcover</td>
                            <td>{this.state.book.additional.Hardcover} pages</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{this.state.book.additional.Publisher}</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>{this.state.book.additional.Language}</td>
                        </tr>

                        <tr>
                            <td>Product Dimensions</td>
                            <td>{this.state.book.additional.Dimensions} inches</td>
                        </tr>

                        <tr>
                            <td>Product weight</td>
                            <td>{this.state.book.additional.weight} pounds</td>
                        </tr>

                        </tbody>
                    </table>

                </div>

            </div>
     
    )
};
}
}

export default BookDetails;
