import React from "react";

const INPUT = (props) => {
    let inputElement = null;
    switch (props.intype) {
        case 'input' :
            inputElement = <input
                type="text"
                className="form-control form-control-sm"
                placeholder={props.named}
                value={props.v}
                onChange={props.changed}/>;
            break;
        case 'pass' :
            inputElement = <input
                type="password"
                className="form-control form-control-sm"
                placeholder={props.named}
                value={props.v}
                onChange={props.changed}/>;
            break;
        case 'area' :
            inputElement = <textarea
                style={{minHeight: '200px', maxHeight: '200px'}}
                className="form-control form-control-sm"
                placeholder={props.named}
                value={props.v}
                onChange={props.changed}/>;
            break;
        case 'file' :
            inputElement = <input
                type="file"
                className="form-control-file"
                onChange={props.changed}/>;
            break;
    }

    return (
        <div className="form-group row">
            <label htmlFor="colFormLabelSm"
                   className="col-sm-2 col-form-label col-form-label-sm">{props.named.split(' ')[1]}</label>
            <div className="col-sm-10">
                {inputElement}
            </div>
        </div>

    );
}

export default INPUT;
