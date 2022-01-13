import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './Redux/Reducer/rootReducer';
import reduxThunk from 'redux-thunk'
import { Router } from 'react-router-dom';
import { history } from "./Util/history";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
