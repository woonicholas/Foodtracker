import React, { Component } from 'react';
import '../../css/restaurant/item.style.css';
// import {} from 'reactstrap';

class Item extends Component {
    render(){
        return (
            <div>
                <div class = 'container ' >
                    <div class = 'row pb-2 listContainer border rounded'>
                        <div class = 'col-4'>
                            <img src = {process.env.PUBLIC_URL + '/placeholder_img.jpg'} alt="food image" className = 'rounded p-2' id = 'listImage'/>
                        </div>
                        <div class = 'col-6'>
                            <h2 class = "pt-2">Chicken House</h2>
                            <p>Seafood. Mexican. Sushi Bar.</p> 
                            <img src = 'images/location_img.png' class = "pb-1"/> 1 Forest, Irvine, CA 92612
                            <p><img src = 'images/time_img.png'/> Open </p>
                            <p>Rating: 4.5/5</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;