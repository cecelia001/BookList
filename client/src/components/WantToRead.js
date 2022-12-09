import React from 'react';
import './WantToRead.css';

function WantToRead(props) {



    return (
        <div className="WantToRead" >
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Mark as Read</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.books.map((b) => (
                <tr key={b.id}>
                    <td className="title">{b.title}</td>
                    <td className="author">{b.author}</td>
                    <td>
                        {" "}
                        <button
                        className="btn btn-primary"
                        type="button"
                        // onClick={() => deleteStop(b.id)}
                        >
                        +
                        </button>{" "}
                    </td>
                    <td>
                        {" "}
                        <button
                        className="btn btn-primary"
                        type="button"
                        // onClick={() => deleteStop(b.id)}
                        >
                        X
                        </button>{" "}
                    </td>
                </tr>                    
                ))}
            </tbody>
            </table>
        </div>
    );
}
export default WantToRead;