import React, { useEffect, useState } from "react";
import { Rating }from 'react-simple-star-rating';


function Rating(props) {
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

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     addRating(rating);
    //     console.log(rating);
    //     console.log("it's working")
    // }
    
    // function handleChange(event) {
    //     let {name, value} = event.target;
    //     setRating((data) => ({...data, [name]: value}))
    // }


    return (

    );
}
export default Rating;