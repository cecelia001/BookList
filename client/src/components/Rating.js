import React, { useEffect, useState } from "react";
import { Rating }from 'react-simple-star-rating';
import './Rating.css'
import $ from 'jquery';


function Rating(props) {

  $(document).ready(function(){
  
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
     
      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('li.star').each(function(e){
        if (e < onStar) {
          $(this).addClass('hover');
        }
        else {
          $(this).removeClass('hover');
        }
      });
      
    }).on('mouseout', function(){
      $(this).parent().children('li.star').each(function(e){
        $(this).removeClass('hover');
      });
    });
    
    
    /* 2. Action to perform on click */
    $('#stars li').on('click', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');
      
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }
      
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
      }
      
      // JUST RESPONSE (Not needed)
      var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
      var msg = "";
      if (ratingValue > 1) {
          msg = "Thanks! You rated this " + ratingValue + " stars.";
      }
      else {
          msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
      }
      responseMessage(msg);
      
    });
    
    
  });
  
  
  function responseMessage(msg) {
    $('.success-box').fadeIn(200);  
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
  }


    // const [ rating, setRating ] = useState();

    // useEffect(() => {
    //     getRatings();
    //   }, []);
    
    //   async function getRatings() {
    //     try {
    //       let response = await fetch ('/ratings');
    //       if (response.ok) {
    //         let data = await response.json();
    //         setRating(data)
    //       } else {
    //         console.log(`server error: ${response.status}: ${response.statusText}`);
    //       }
    //     } catch (err) {
    //       console.log(`network error: ${err.message}`);
    //     }
    //   }

    // async function addRating(rating) {
    //     let options = {
    //         method: "POST",
    //         headers: { "content-Type" : "application/json" },
    //         body: JSON.stringify({
    //             book_id: rating.book_id,
    //             rating: rating.number,
    //         })
    //     };
    
    //     try{      
    //     let response = await fetch("/ratings", options);
    //     if (response.ok) {
    //       let newRating = await response.json();
    //       setRating(newRating)
    //     } else {
    //       console.log(`Server error: ${response.status} ${response.statusText}`);
    //     }
    //   } catch (err) {
    //     console.log(`Network error: ${err.message}`);
    //   }
    // }

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
      <section class='rating-widget'>
  
      <!-- Rating Stars Box -->
      <div class='rating-stars text-center'>
        <ul id='stars'>
          <li class='star' title='Poor' data-value='1'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Fair' data-value='2'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Good' data-value='3'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='Excellent' data-value='4'>
            <i class='fa fa-star fa-fw'></i>
          </li>
          <li class='star' title='WOW!!!' data-value='5'>
            <i class='fa fa-star fa-fw'></i>
          </li>
        </ul>
      </div>
      
      <div class='success-box'>
        <div class='clearfix'></div>
        <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
        <div class='text-message'></div>
        <div class='clearfix'></div>
      </div>
      
      
      
    </section>
    );
}
export default Rating;