import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App }  from './App/App.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const wrapper = (
 <Provider store={store}>
     <App/>
 </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'));

serviceWorker.unregister();
