import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './Home';
import Oferta from './Oferta';

// para poder usar el store hay que contener la aplicacion en un provider
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/oferta" exact component={Oferta} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
