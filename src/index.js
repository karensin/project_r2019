import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import rootReducer from './Redux/reducers'
import { createStore } from 'redux'
import { changePetType, togglePetType, boundChangePetType } from './Redux/actions'
import petTypeReducer from './Redux/reducers'


export const store = createStore(petTypeReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(changePetType('testing'))
store.dispatch(boundChangePetType('testing2'))
store.getState()
store.dispatch(boundChangePetType('testing'))
store.dispatch(togglePetType('testing'))

unsubscribe()

ReactDOM.render(
    <Provider store={store}>

        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
