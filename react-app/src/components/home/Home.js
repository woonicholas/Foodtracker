import React, { Component } from 'react';
import '../../css/home.style.css';
import axios from 'axios';
import SearchForm from './SearchForm';
class Home extends Component {

    constructor(props){
      super(props);

      this.state = {
        query: '',
        location: ''
      };

      this.onChangeQuery = this.onChangeQuery.bind(this);
      this.onChangeLocation = this.onChangeLocation.bind(this);
      this.onRestaurantFormSubmit = this.onRestaurantFormSubmit.bind(this);
      this.onRecipeFormSubmit = this.onRecipeFormSubmit.bind(this);
      this.onButtonClick = this.onButtonClick.bind(this);
    }

    onRestaurantFormSubmit = event => {
      event.preventDefault();
      // console.log(this.state)
      // fetch(encodeURI(`http://localhost:8888/search/restaurant/${event.location}/${event.query}`)).then(
      //   response => response.json()
      // ).then(data => {
      //   console.log("success", data)
      // }).catch((err) =>{
      //   console.log("error: ", err)
      // })
      console.log(encodeURI(`http://localhost:8888/search/restaurant/${this.state.location}/${this.state.query}`))
      axios.get(encodeURI(`http://localhost:8888/search/restaurant/${this.state.location}/${this.state.query}`))
        .then( res => {
          console.log(res)
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
export default Home;