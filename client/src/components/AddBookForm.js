import React, { useState, useEffect } from "react";
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
        <h2 className="descrip"> Add a book</h2>
        
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                <input
                    type="text"
                    placeholder = "Title"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                </div>

             <div className="col-md-4 mb-3">
                <input
                    type="text"
                    placeholder = "Author"
                    className="form-control"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
            </div>
            
            <div className="row justify-content-center">
                <div className="col-md-2 mb-3">
                    <button className="btn btn-primary" type="submit"> Add Book </button>
                </div>
            </div>

            </div>

      </form>

        </div>
    );
}
export default AddBookForm;