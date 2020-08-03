import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Login';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import newsReducer from './reducers/newsReducer';

const store = createStore(newsReducer);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>  
  <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/app" component={App} />
        </Switch>   
  </Provider>
  </BrowserRouter>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
