import React, { Component } from 'react';
import Item from './Item';
import '../../css/restaurant/results.style.css';
import {Label, FormGroup, Input, Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class ResultsRestaurant extends Component {
    // constructor(){
    //     super();
    //     // this.dataSet = [<Item/>*500]
    // }
    componentDidMount(){
        console.log(this.props.location.state.results)
    }

    renderResults(){
        if(this.props.location.state.results){
            return  <Item results={this.props.location.state.results[0]}/>
        }
    }

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
                   {this.renderResults}
                </div>
            </div>
        )
    }
}

export default withRouter(ResultsRestaurant);