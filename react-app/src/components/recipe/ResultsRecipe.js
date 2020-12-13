import React, { Component } from 'react';
import Item from './Item';
import '../../css/recipe/results.style.css';
import {Label, FormGroup, Input, Button} from 'reactstrap';
import {CardDeck,Col} from 'reactstrap';

class ResultsRecipe extends Component {

    render(){
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row header' id='background-results'>
                        <h1 className='py-4 mx-5'>FoodFinder</h1>
                        <FormGroup className='px-2 py-2'>
                            <Label>Search</Label>
                            <Input type='text' className='form-control' id='queryInput' />
                        </FormGroup>
                        <div className ='py-4 mx-3 my-3'><Button className='btn btn-light'>Search</Button></div>
                    </div>
                </div>
                <hr></hr>
                <div className= "row sm-3 py-3 justify-content-center">
                    <Item/>
                </div>
                <div className= "row sm-3 py-3 justify-content-center">
                    <Item/>
                </div>
                <div className= "row sm-3 py-3 justify-content-center">
                    <Item/>
                </div>
                <div className= "row sm-3 py-3 justify-content-center">
                    <Item/>
                </div>
            </div>
        )
    }
}

export default ResultsRecipe;