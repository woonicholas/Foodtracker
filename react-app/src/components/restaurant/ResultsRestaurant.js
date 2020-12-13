import React, { Component } from 'react';
import Item from './Item';
import '../../css/restaurant/results.style.css';
import {Label, FormGroup, Input, Button} from 'reactstrap';

class ResultsRestaurant extends Component {
    // constructor(){
    //     super();
    //     // this.dataSet = [<Item/>*500]
    // }
    render(){
        return (
            <div>
                <div className='container-fluid' >
                    <div className='row header' id='background-results' >
                        <h1 className='py-4 mx-5'>FoodFinder</h1>
                        <FormGroup className='px-2 py-2'>
                            <Label>Search</Label>
                            <Input type='text' className='form-control' id='queryInput' />
                        </FormGroup>
                        <FormGroup className='px-2 py-2'>
                            <Label>Location</Label>
                            <Input type='text' className='form-control' id='locationInput'/>
                        </FormGroup>
                        <div className ='py-4 mx-3 my-3'><Button className='btn btn-light'>Search</Button> <Button  className='btn btn-success'>Randomize</Button></div>
                    </div>
                </div>
                <hr></hr>
                <div className='row justify-content-center' >
                    <Item/>
                </div>
                <div className='row justify-content-center' >
                    <Item/>
                </div>
            </div>
        )
    }
}

export default ResultsRestaurant;