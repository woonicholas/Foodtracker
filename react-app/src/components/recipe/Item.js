import React, { Component } from 'react';
import '../../css/recipe/item.style.css';
import {Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, CardImg, Col} from 'reactstrap';

// Card.propTypes = {}

const Item = (props) => {
    return (
        <div className = " py-2">
          
            <Card className = "justify-content-center">
                <CardBody>
                    <CardTitle tag="h5">Chicken Noodle Soup</CardTitle>
                </CardBody>
                <CardImg src={process.env.PUBLIC_URL + '/recipe_img.jpg'} alt="Card image cap"  className ="card-image px-4"/>
                <CardBody>
                    <CardText >Some quick example k of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>

        </div>
    );
}


export default Item;