import React, { Component } from 'react';
import '../../css/home.style.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import { withRouter } from 'react-router-dom';
class Home extends Component {

    constructor(props){
      super(props);

      this.state = {
        query: '',
        location: '',
        results:["resultA","resultB"],
        showResturauntResults: false,
      };

      this.onChangeQuery = this.onChangeQuery.bind(this);
      this.onChangeLocation = this.onChangeLocation.bind(this);
      this.onRestaurantFormSubmit = this.onRestaurantFormSubmit.bind(this);
      this.onRecipeFormSubmit = this.onRecipeFormSubmit.bind(this);
      this.onButtonClick = this.onButtonClick.bind(this);
    }

    onRestaurantFormSubmit = async event => {
      event.preventDefault();
      console.log(encodeURI(`http://localhost:8888/search/restaurant/${this.state.location}/${this.state.query}`))
      await axios.get(encodeURI(`http://localhost:8888/search/restaurant/${this.state.location}/${this.state.query}`))
        .then( res => {
          this.setState({results: res.data})
          console.log(this.state)
        })
      console.log(this.state)
      this.props.history.push({
        pathname: 'results',
        state: {results: this.state.results}
      })
    }

    onRecipeFormSubmit = event => {
      event.preventDefault();
      console.log(this.state)
    }

    onChangeQuery = event =>  {
      this.setState({query: event.target.value})
    }

    onChangeLocation = event =>  {
      this.setState({location: event.target.value})
    }

    onButtonClick = event => {
      event.preventDefault();
    }

    render(){
        return (
        <div className='container-fluid' id='background'>
          <div className='row header' >
            <h1 className='py-4 ml-5'>FoodFinder</h1>
            <img className='ff-logo mt-2' src= {process.env.PUBLIC_URL + '/FoodFinderLogo.png'}/>
          </div>
          <div className='row my-4 py-5'></div>
            <div className='row justify-content-center'>
              <SearchForm onChangeLocation={this.onChangeLocation} onChangeQuery={this.onChangeQuery} 
                onSubmitRestaurant={this.onRestaurantFormSubmit} onSubmitRecipe={this.onRecipeFormSubmit} 
                onButtonClick={this.onButtonClick}/>
            </div>
        </div>
        )
    }
}
export default withRouter(Home);