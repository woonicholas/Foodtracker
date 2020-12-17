import React, { Component } from 'react';
import '../../css/restaurant/item.style.css';

//returns the item for each item in the restaurants showing the name, type of cuisine, address, open/close
function Item(props) {
return (
  <div>
    <div class = 'container pb-2' >
      <div class = 'row listContainer border rounded'>
        <div class = 'col-4'>
          <img src = {props.results.image_url} alt="food image" className = 'rounded p-2' id = 'listImage'/>
        </div>
        <div class = 'col-6'>
          <h2 class = "pt-2">{props.results.name}</h2>
          <p>{props.results.categories.map((c,index) => (
            c.title + ". "
          ))}</p> 
          <img src = {process.env.PUBLIC_URL + 'location_img.png'} class = "pb-1"/> {props.results.location[0]}, {props.results.location[1]}, {props.results.location[2]}
          <p><img src = {process.env.PUBLIC_URL + 'time_img.png'}/> {props.results.is_closed ? "Closed" : "Open" } </p>
          <p>Rating: {props.results.rating}/5</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Item;