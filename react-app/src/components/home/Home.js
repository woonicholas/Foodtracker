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
        randomFoodList: ["Noodles","Rice","Chinese","Japanese","Vietnamese","Korean","Indian","Thai","Jamaican","Vegetarian","Mediterranean","Greek","Mexican","South African","American","Chilean",
            "Russian","French","Italian","Soul Food"],
        showRecipeResults:false
      };

      this.onChangeQuery = this.onChangeQuery.bind(this);
      this.onChangeLocation = this.onChangeLocation.bind(this);
      this.onRestaurantFormSubmit = this.onRestaurantFormSubmit.bind(this);
      this.onRecipeFormSubmit = this.onRecipeFormSubmit.bind(this);
      this.onButtonClick = this.onButtonClick.bind(this);
      this.randomize = this.randomize.bind(this);
    }
    /*
    * Handles the resturaunt form submit and calls the yelp api.
    * The results received from the yelp api are then passed to the results page
    */
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
        state: {
          results: this.state.results,
          query: this.state.query,
          location: this.state.location,
        }
      })
    }
    
    /*
    * Randomizes the query based on a fixed lit of options 
    * For future improvements, can use this to ping some api instead
    */
    randomize = event => {
      event.preventDefault();
      this.setState({query: this.state.randomFoodList[Math.floor(Math.random()*Math.floor(this.state.randomFoodList.length))]});
      console.log(this.state.query)
    }
    /*
    * Handles the recipe form submit and calls the yelp api.
    * The results received from the yelp api are then passed to the recipe results page
    */
    onRecipeFormSubmit = async event => {
      event.preventDefault();
      console.log(encodeURI(`http://localhost:8888/search/recipe/${this.state.query}`))
      await axios.get(encodeURI(`http://localhost:8888/search/recipe/${this.state.query}`))
        .then(res =>{
          this.setState({results: res.data})
          console.log(res)
          console.log(this.state)
        })
      console.log(this.state);
      this.props.history.push({
        pathname: 'recipe',
        state: {
          results: this.state.results,
          query: this.state.query,
        }
      })
    }

    /*
    * Handles updating the state for the query
    */
    onChangeQuery = event =>  {
      this.setState({query: event.target.value})
    }
    /*
    * Handles updating the state for the location
    */
    onChangeLocation = event =>  {
      this.setState({location: event.target.value})
    }
    // prevents form from reloading the page
    onButtonClick = event => {
      event.preventDefault();
    }

    render(){
        return (
        <div className='container-fluid' id='background'>
          <div className='row header' >
            <h1 className='py-4 ml-5 logo'>FoodFinder</h1>
            <img className='ff-logo mt-2' src= {process.env.PUBLIC_URL + '/FoodFinderLogo.png'}/>
          </div>
          <div className='row my-4 py-5'></div>
            <div className='row justify-content-center'>
              <SearchForm onChangeLocation={this.onChangeLocation} onChangeQuery={this.onChangeQuery} 
                onSubmitRestaurant={this.onRestaurantFormSubmit} onSubmitRecipe={this.onRecipeFormSubmit} 
                onButtonClick={this.onButtonClick} query={this.state.query} randomize={this.randomize}/>
            </div>
        </div>
        )
    }
}
export default withRouter(Home);