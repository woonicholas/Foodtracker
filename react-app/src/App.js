import React from 'react';
import Home from './components/Home';
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
      <Route path ="/">
        <Home/>
      </Route>
      <Route path ="/Results">
        <Results/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
