import React, { Component } from 'react';
import Item from './Item';
import '../../css/recipe/results.style.css';
import {Label, FormGroup, Input, Button} from 'reactstrap';
import {CardDeck,Col} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class ResultsRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            showRecipeResults: false,
        };
    }

    componentDidMount(){
        console.log(this.props.location.state.results);
        this.setState({showRecipeResults: true, showResturauntResults:false})
    }

    renderResults(){
        if(this.state.showRecipeResults){
            return  this.props.location.state.results.map((result,index)=> (
                <Item key={index} results={result}/>
            ))
        }
    }

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
                    {this.renderResults()}
                </div>
            </div>
        )
    }
}

export default withRouter(ResultsRecipe);