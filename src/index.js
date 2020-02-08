import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { changePetType, togglePetType, boundChangePetType } from './Redux/actions'
import petTypeReducer from './Redux/reducers'


export const store = createStore(petTypeReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.getState()

// unsubscribe()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
