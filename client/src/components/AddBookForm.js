import React, { useState } from "react";
import './AddBookForm.css';

const BLANK_FORM = {
    title: "",
    author: ""
};


function AddBookForm(props) {

    const [ formData, setFormData ] = useState(BLANK_FORM)


    function handleSubmit(event) {
        event.preventDefault();
        props.addBookCb(formData);
        setFormData(BLANK_FORM);
    }

    function handleChange(event) {
        let {name, value} = event.target;
        setFormData((data) => ({ ...data, [name]: value}))
    }


    return (
        <div className="AddBookForm" >
        
        <form onSubmit={handleSubmit}>
            <div className="row mb-4">
                <div className="col">
                <input
                    type="text"
                    placeholder = "Title"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                </div>

             <div className="col">
                <input
                    type="text"
                    placeholder = "Author"
                    className="form-control"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
            </div>
            
            <div id="boxbtn" className="row justify-content-center">
                <div className="col-md-2 mb-4">
                    <button id="addButton" type="button" className="btn btn-primary"> Submit </button>
                </div>
            </div>

            </div>
      </form>
      
        </div>
    );
}
export default AddBookForm;