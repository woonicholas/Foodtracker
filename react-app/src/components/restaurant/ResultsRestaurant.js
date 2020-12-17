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

    //check if the state has been passed to the props
    componentDidMount(){
        console.log(this.props.location.state.results)
        this.setState({showResturauntResults: true, showRecipeResults:false})
    }

    //rendering each item for the restaurant and grabs from the Item component
    renderResults(){
        if(this.state.showResturauntResults){
            return  this.props.location.state.results.map((result,index)=> (
                <Item key={index} results={result}/>
            ))
        }
    }

    //routes back to the home page if the FoodFinder button is clicked
    goHome(){
        this.props.history.push({
            pathname: '/',
          })
    }

    //renders the Restaurant results page
    render(){
        return (
            <div>
                <div className='container-fluid' >
                    <div className='row header' id='background-results' >
                        <h1 className='py-4 mx-5 logo' onClick={() => this.goHome()}>FoodFinder</h1>
                        <FormGroup className='px-2 py-2'>
                            <Label>Search</Label>
                            <Input type='text' className='form-control' value={this.props.location.state.query} disabled='true' id='queryInput' />
                        </FormGroup>
                        <FormGroup className='px-2 py-2'>
                            <Label>Location</Label>
                            <Input type='text' className='form-control' value={this.props.location.state.location} disabled='true' id='locationInput'/>
                        </FormGroup>
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