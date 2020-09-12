import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { changePetType, togglePetType, boundChangePetType } from './Redux/actions'
import petReducer from './Redux/reducers'


export const store = createStore(petReducer)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
