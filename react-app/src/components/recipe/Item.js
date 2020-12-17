import React, { Component } from 'react';
import '../../css/recipe/item.style.css';

//each recipe item that shows the title, time required, calories/serving, and ingredients
const Item = (props) => {
    return (
        <div>
            <div class = 'container pb-2' > 
                <div class = 'listContainer border rounded'>
                    <div class = 'row'>
                        <div class = 'py-5 col-4'>
                            <img src = {props.results.image} alt="food image" className = 'rounded p-2' id = 'listImage'/>
                        </div>
                        <div class = 'col-6'>
                        <a target = "_blank" href = {props.results.url}><h2 class = "pt-2">{props.results.label}</h2></a>
                            <strong>Time Required:</strong> {props.results.totalTime}
                            <p><strong>Calories/Serving: </strong> {Math.round(props.results.calories)}</p>
                            <div className = "ingredient-text py-1"><strong>Ingredients:</strong> 
                                <p className = "whitespace"> {props.results.ingredientLines.map((c,index) => (
                                    "• " + c + "\n"
                                    ))}
                                </p>                                        
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Item;