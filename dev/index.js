import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList.js';
import BrowserStorage from './class/BrowserStorage.js';
import AppContainer from './components/Container';
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

  actions = {
    add: data => {
      Todo.add(data);
      this.updateStorage();
    },
    edit: (id, data) => {
      Todo.edit(id, data);
      this.updateStorage();
    },
    check: id => {
      Todo.check(id);
      this.updateStorage();
    },
    remove: id => {
      Todo.remove(id);
      this.updateStorage();
    },
    removeDone: () => {
      Todo.removeDone();
      this.updateStorage();
    },
  };

  updateStorage = () => {
    Todo.sort(['date.done', 'date.add', 'done'], true);
    if (storage) storage.set(Todo.getData());
    this.setState({ list: Todo.getList() });
  };

  componentDidMount = () => {
    if (storage && storage.get()) {
      Todo.setData(storage.get());
      this.setState({ list: Todo.getList() });
    }
  };

  render = () => (
    <AppContainer list={this.state.list} actions={this.actions} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
