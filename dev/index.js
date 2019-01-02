import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList';
import BrowserStorage from './class/BrowserStorage';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = new TodoList();
let storage;
try {
  storage = new BrowserStorage('TodoList');
} catch (e) {
  // localStorage doesn't work on file:// urls
  storage = null;
}

class App extends React.Component {
  state = { list: [] };

  actions = method => (...args) => {
    Todo[method](...args);
    this.updateStorage();
  };

  updateStorage = () => {
    Todo.sort(['date.done', 'date.add', 'done'], true);
    if (storage) storage.set(Todo.getData());
    this.setState({ list: Todo.getOrderedList() });
  };

  componentDidMount = () => {
    if (storage && storage.get()) {
      Todo.setData(storage.get());
      this.setState({ list: Todo.getOrderedList() });
    }
  };

  render = () => <AppContainer list={this.state.list} actions={this.actions} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
