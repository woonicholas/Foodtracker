import React from 'react';
import Home from './components/home/Home';
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
    </BrowserRouter>
  );
}

export default App;
