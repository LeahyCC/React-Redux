import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReduxThunk from 'redux-thunk';
import {  applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers,
    {
        products: [{ name: 'iPhone'}],
        user: 'Colin'
    },
    allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App aRandomProp="Foo" /></Provider>, document.getElementById('root'));
registerServiceWorker();
