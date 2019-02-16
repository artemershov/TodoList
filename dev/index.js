import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import store, { TodoApp } from './redux';
import 'bootstrap/dist/css/bootstrap.min.css';

TodoApp.stylesActions('updateStyle');

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app')
);
