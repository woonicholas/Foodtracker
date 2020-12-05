import React, { Component } from 'react';
import {Label, FormGroup, Input, Button} from 'reactstrap';

class Results extends Component {
    render(){
        return (
            <div className='container-fluid' >
                <div className='row header' id='background' >
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
        )
    }
}

export default Results;