import React, { Component } from 'react';
import Item from './Item';
import '../../css/restaurant/results.style.css';
import {Label, FormGroup, Input, Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class ResultsRestaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
            showResturauntResults: false,
          };
    }

    componentDidMount(){
        console.log(this.props.location.state.results)
        this.setState({showResturauntResults: true, showRecipeResults:false})
    }

    renderResults(){
        if(this.state.showResturauntResults){
            return  this.props.location.state.results.map((result,index)=> (
                <Item key={index} results={result}/>
            ))
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
                   {this.renderResults()}
                </div>
            </div>
        )
    }
}

export default withRouter(ResultsRestaurant);