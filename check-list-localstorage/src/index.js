import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import './styles/index.css';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});
console.log("store - ", persistedState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
