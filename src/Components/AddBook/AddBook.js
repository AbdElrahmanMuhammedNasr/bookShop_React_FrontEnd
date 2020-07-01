import React, {Component} from "react";
import INPUT from "./InputUI";

class AddBook extends Component {

    state = {
        AddForm: {
            image: {
                value: '',
                type:''
            },
            name: {
                value: '',
                type:''
            },
            author: {
                value: '',
                type:''
            },
            price: {
                value: '',
                type:''
            },
            description: {
                value: '',
                type:''
            },
        }
    }

    inputChangeHandler = (event, whom) => {
        const updateForm = {
            ...this.state.AddForm
        };
        const updateFormElement = {
            ...updateForm[whom]
        };
        updateFormElement.value = event.target.value;
        updateForm[whom] = updateFormElement;
        this.setState({
            AddForm: updateForm
        });
    }

    saveNewBook =()=>{
        console.log(this.state.AddForm);
    }


render()
{
    return (
        <form style={{maxWidth: '800px', margin: 'auto', padding: '20px'}} className='border'>

            <INPUT intype='file' named='Book Image' v={this.state.AddForm.name.value}
                   changed={(event) => this.inputChangeHandler(event, 'image')}/>
            <INPUT intype='input' v={this.state.AddForm.name.value} named='Book Name'
                   changed={(event) => this.inputChangeHandler(event, 'name')}/>
            <INPUT intype='input' v={this.state.AddForm.author.value} named='Book Author'
                   changed={(event) => this.inputChangeHandler(event, 'author')}/>
            <INPUT intype='input' v={this.state.AddForm.price.value} named='Book Price'
                   changed={(event) => this.inputChangeHandler(event, 'price')}/>
            <INPUT intype='area' v={this.state.AddForm.description.value} named='Book Description'
                   changed={(event) => this.inputChangeHandler(event, 'description')}/>

            <button className='btn btn-primary' onClick={this.saveNewBook}>Add</button>

        </form>
    );
}
}

export default AddBook;
