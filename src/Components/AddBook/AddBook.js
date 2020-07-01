import React, {Component} from "react";
class AddBook extends Component{
    render() {
        return(
            <form style={{ maxWidth:'800px',margin:'auto'}}>
                <div className="form-group row">
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Book Name</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control form-control-sm" placeholder="Book Name" />
                    </div>
                </div>

            </form>
        );
    }
}
export default AddBook;
