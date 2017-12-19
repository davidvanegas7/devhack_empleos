import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './Home/container';
import Oferta from './Oferta/container';
import Login from './Login';

// para poder usar el store hay que contener la aplicacion en un provider
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/oferta" exact component={Oferta} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>
);
/*
initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));
*/
export default App;
