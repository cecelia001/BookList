import React, { useEffect, useState } from "react";
import { Rating }from 'react-simple-star-rating';
import './BookTable.css';

function BookTable(props) {
    const [ rating, setRating ] = useState(0);

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

    function handleSubmit(event) {
        setRating(rating);
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
                        <Rating
                            onClick={handleSubmit}
                            ratingValue={rating}
                            size={30}
                            label
                            transition
                            fillColor='orange'
                            emptyColor='gray'
                           // className='foo' // Will remove the inline style if applied

                        />
                    </td>
                </tr>                    
                ))}
            </tbody>
            </table>
        </div>
    );
}
export default BookTable;