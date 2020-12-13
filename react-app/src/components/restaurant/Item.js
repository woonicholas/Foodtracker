import React, { Component } from 'react';
import '../../css/restaurant/item.style.css';
// import {} from 'reactstrap';

function Item(props) {
return (
  <div>
    <div class = 'container pb-2' >
      <div class = 'row listContainer border rounded'>
        <div class = 'col-4'>
          <img src = "" alt="food image" className = 'rounded p-2' id = 'listImage'/>
        </div>
        <div class = 'col-6'>
          <h2 class = "pt-2">{props.results.name}</h2>
          <p>{props.results.categories.map((c,index) => (
            c.title
          ))}</p> 
          <img src = 'images/location_img.png' class = "pb-1"/> 1 Forest, Irvine, CA 92612
          <p><img src = 'images/time_img.png'/> Open </p>
          <p>Rating: 4.5/5</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Item;