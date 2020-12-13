import React, { Component } from 'react';
import '../../css/recipe/item.style.css';
import {Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, CardImg, Col} from 'reactstrap';

// Card.propTypes = {}

const Item = (props) => {
    return (
        <div>
            <div class = 'container pb-2' >
                <div class = 'listContainer border rounded'>
                    <div class = 'row'>
                        <div class = 'py-5 col-4'>
                            <img src = {process.env.PUBLIC_URL + '/recipe_img.jpg'} alt="food image" className = 'rounded p-2' id = 'listImage'/>
                        </div>
                        <div class = 'col-6'>
                            <h2 class = "pt-2">Chicken Noodle Soup</h2> 
                            <strong>Time Required:</strong> 90 Minutes
                            <p><strong>Calories/Serving: </strong> 140 Calories</p>
                            <div className = "ingredient-text py-1"><strong>Ingredients:</strong> 
                                <p> • One 3 1/2-pound chicken <br/>
                                 • 5 carrots<br/>
                                 • 5 ribs of celery <br/>
                                 • 1 onion, quartered (for stock, peel on is okay)<br/>
                                 • 3 cloves of garlic, peel on, cut in half<br/>
                                 • 2 to 3 sprigs of fresh thyme (or a teaspoon of dried) 1 bunch of parsley<br/>                 
                                  </p>                                        
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className = " py-2">
            
        //     <Card>
        //         <CardBody>
        //             <CardTitle tag="h5">Chicken Noodle Soup</CardTitle>
        //             <CardSubtitle>140 Calories</CardSubtitle>
        //         </CardBody>
        //         <CardImg src={process.env.PUBLIC_URL + '/recipe_img.jpg'} alt="Card image cap"  className ="card-image px-4"/>
        //         <CardBody>
        //             <CardText><strong>Time Required:</strong> 140 Minutes</CardText>
        //             <CardText className="cardtext"><strong>Ingredients:</strong> One 3 1/2-pound chicken, cut into parts—breast, thighs, backs, wings and neck (if available)
        //             5 carrots (2 carrots scrubbed clean, but not peeled, cut into 2 inch chunks for the stock, 3 carrots peeled and cut into 1/4-inch rounds for the soup)
        //             5 ribs of celery (2 ribs cut into 2 inch pieces for the stock, 3 ribs cut into 1/4-inch thick slices for the soup), including celery tops for the stock
        //             1 onion, quartered (for stock, peel on is okay)
        //             3 cloves of garlic, peel on, cut in half
        //             2 to 3 sprigs of fresh thyme (or a teaspoon of dried) 1 bunch of parsley</CardText>
        //             <CardLink href="https://www.edamam.com/recipe/chicken-noodle-soup-recipes-c1348377891b4c1a81648e55b12ebd00/soup">Recipe Link</CardLink>
        //         </CardBody>
        //     </Card>

        // </div>
    );
}


export default Item;