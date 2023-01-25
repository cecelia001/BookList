import React, { useEffect, useState } from "react";
import { Rating }from 'react-simple-star-rating';
import './BookTable.css';

function BookTable(props) {
    const [ rating, setRating ] = useState();

    useEffect(() => {
        getRatings();
      }, []);
    
      async function getRatings() {
        try {
          let response = await fetch ('/ratings');
          if (response.ok) {
            let data = await response.json();
            setRating(data)
          } else {
            console.log(`server error: ${response.status}: ${response.statusText}`);
          }
        } catch (err) {
          console.log(`network error: ${err.message}`);
        }
      }

    async function addRating(rating) {
        let options = {
            method: "POST",
            headers: { "content-Type" : "application/json" },
            body: JSON.stringify({
                book_id: rating.book_id,
                rating: rating.number,
            })
        };
    
        try{      
        let response = await fetch("/ratings", options);
        if (response.ok) {
          let newRating = await response.json();
          setRating(newRating)
        } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`);
      }
    }

    function handleSubmit(event) {
        event.preventDefault();
        addRating(rating);
        console.log(rating);
        console.log("it's working")
    }
    
    function handleChange(event) {
        let {name, value} = event.target;
        setRating((data) => ({...data, [name]: value}))
    }


    return (
        <div className="WantToRead" >
            <table className="table">
            <thead className="table-light">
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Mark as Read</th>
                <th scope="col">Delete</th>
                <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody>
                {props.books.map((b) => (
                <tr key={b.id}>
                    <td className="title">{b.title}</td>
                    <td className="author">{b.author}</td>
                    <td>
                        <button
                        className= {b.done === 1 ? "done" : "regbtn"}
                        type="button"
                        onClick={() => props.completeBookCb(b.id)}
                        >
                        ✓
                        </button>
                    </td>
                    <td>
                        <button
                        className="deletebtn"
                        type="button"
                        onClick={() => props.deleteBookCb(b.id)}
                        >
                        X
                        </button>
                    </td>
                    <td>
   

                        {/* <Rating
                            onClick={() => addRating(b.id, rating)}
                            ratingValue={rating}
                            size={30}
                            label
                            transition
                            fillColor='orange'
                            emptyColor='gray'
                           // className='foo' // Will remove the inline style if applied
                        /> */}
                    </td>
                </tr>                    
                ))}
            </tbody>
            </table>

            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                      Click here!
                    </button>


            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              ...
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div> */}
        </div>
    );
}
export default BookTable;