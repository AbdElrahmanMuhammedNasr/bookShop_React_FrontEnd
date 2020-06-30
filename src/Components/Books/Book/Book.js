import React from "react";

const Book = (props) => {
    return (
        <div className="card mb-3 " style={{maxWidth: '540px', margin:'10px auto', pointer:'cursor'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.data.image} className="card-img" style={{margin:'20px 10px'}}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
                        <p className="card-text">{props.data.description}</p>
                        <p className="card-text row">
                            <small className="text-muted col">author :  {props.data.author}</small>
                            <small className="text-muted col">rating : {props.data.rating}</small>
                        </p>

                    </div>
                </div>
            </div>
        </div>


    );

}
export default Book;
