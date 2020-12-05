import React, { Component } from 'react';
import '../css/home.style.css';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';

class Home extends Component {
    render(){
        return (
        <div className='container-fluid' id='background'>
          <div className='row header' >
            <h1 className='py-4 mx-5'>FoodFinder</h1>
          </div>
          <div className='row my-5 py-5'></div>
            <div className='row justify-content-center'>
              <Form className='col-3 search'>
                <FormGroup>
                  <Label>Search</Label>
                  <Input type='text' className='form-control' id='queryInput'/>
                </FormGroup>
                <div className='form-group'>
                  <Label>Location</Label>
                  <Input type='text' className='form-control' id='locationInput'/>
                </div>
                <Button className='btn btn-light col-3 mr-1'>Search</Button> 
                <Button className='btn btn-success col-3 mx-1'>Randomize</Button>
              </Form>
            </div>
        </div>
        )
    }
}
export default Home;