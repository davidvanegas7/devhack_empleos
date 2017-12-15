import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';
// utilizamos los reducers combinados aqui y exportamos el store que usaremos en App.jsx
const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
