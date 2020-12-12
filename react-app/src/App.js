import React from 'react';
import Home from './components/home/Home';
import Results from './components/Results'
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
          <Results/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
