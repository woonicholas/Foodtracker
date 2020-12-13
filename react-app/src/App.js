import React from 'react';
import Home from './components/home/Home';
import ResultsRestaurant from './components/restaurant/ResultsRestaurant';
import ResultsRecipe from './components/recipe/ResultsRecipe';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path ="/">
          <Home/>
        </Route>
        <Route path ="/results">
          <ResultsRestaurant/>
        </Route>
        <Route path ="/recipe">
          <ResultsRecipe/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
