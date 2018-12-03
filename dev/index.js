import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList.js';
import BrowserStorage from './class/BrowserStorage.js';
import AppContainer from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const todos = new TodoList();
let storage;
try {
  storage = new BrowserStorage('TodoList');
} catch (e) {
  // localStorage doesn't work on file:// urls
  storage = null;
}

class App extends React.Component {
  state = { list: [] };

  actions = {
    add: data => {
      todos.add(data);
      this.updateStorage();
    },
    edit: (id, data) => {
      todos.edit(id, data);
      this.updateStorage();
    },
    check: id => {
      todos.check(id);
      this.updateStorage();
    },
    remove: id => {
      todos.remove(id);
      this.updateStorage();
    },
    removeDone: () => {
      todos.removeDone();
      this.updateStorage();
    },
  };

  updateStorage = () => {
    todos.sort(['date.done', 'date.add', 'done'], true);
    if (storage) storage.set(todos.getData());
    this.setState({ list: todos.getList() });
  };

  componentDidMount = () => {
    if (storage && storage.get()) {
      todos.setData(storage.get());
      this.setState({ list: todos.getList() });
    }
  };

  render = () => (
    <AppContainer todos={this.state.list} actions={this.actions} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
