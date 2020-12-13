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
import { createBrowserHistory} from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact={true} path ="/"
        render = {(props) => (
          <Home/>
        )}
        >  
        </Route>
        <Route path ="/results"
          render={ (props) => (
            <ResultsRestaurant />
          )
          }
        >
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
