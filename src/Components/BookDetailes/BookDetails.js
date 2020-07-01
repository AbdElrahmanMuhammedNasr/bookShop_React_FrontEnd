import React, {Component} from "react";

class BookDetails extends Component {
    render() {
        return (
            console.log(this.props.location.search.split('?')[1]),
            <div>
                <div className='row' style={{padding: '20px', backgroundColor: ''}}>
                    <section className='col'>
                        <img style={{
                            width:'100%'
                        }} src={this.props.location.search.split('?')[1]}/>
                    </section>
                    <section className='col' style={{backgroundColor: '', overflow: 'hidden',}}>

                        <div className="card">
                            <div className="card-header">
                                The Hell of Red
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <section className='row'>
                                        <p className='col text-muted'>By AbdElrahman Nasr (Author) </p>
                                        <p className='col text-muted'>format: Kindle Edition </p>
                                    </section>

                                    <section className='row'>
                                        <footer className="blockquote-footer col">Rating 5</footer>
                                        <footer className="blockquote-footer col">450 ratings</footer>
                                    </section>

                                </blockquote>
                            </div>
                        </div>


                        <div className="card" style={{marginTop: '20px'}}>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p className='col text-muted'>Type: Police </p>
                                    <p className='col text-muted'>Price: 450 EGP </p>
                                    <p className='col text-muted'>Rent: 10 EGP Per Day </p>
                                    <footer className='row'>
                                        <button className='btn btn-primary col' style={{margin:'20px'}}>Buy Book</button>
                                        <button className='btn btn-secondary col' style={{margin:'20px'}}>Rent Book</button>
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
                            <td>240 pages</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>Simon & Schuster</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>English</td>
                        </tr>

                        <tr>
                            <td>Product Dimensions</td>
                            <td>6 x 9 inches</td>
                        </tr>

                        <tr>
                            <td>Product Dimensions</td>
                            <td>1.7 pounds</td>
                        </tr>

                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

export default BookDetails;
