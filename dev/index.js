import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList.js';
import BrowserStorage from './class/BrowserStorage.js';
import AppContainer from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todos = new TodoList();
    try {
      this.storage = new BrowserStorage('TodoList');
    } catch (e) {
      // localStorage doesn't work on file:// urls
    }
    this.state = {
      todos: [],
    };
  }

  actions = {
    add: data => {
      const todos = this.todos.add(data);
      if (this.storage) this.storage.data = todos;
      this.setState({ todos });
    },
    edit: data => {
      this.todos.edit(data);
      const todos = this.todos.sort();
      if (this.storage) this.storage.data = todos;
      this.setState({ todos });
    },
    remove: data => {
      const todos = this.todos.remove(data);
      if (this.storage) this.storage.data = todos;
      this.setState({ todos });
    },
    removeDone: () => {
      const todos = this.todos.removeDone();
      if (this.storage) this.storage.data = todos;
      this.setState({ todos });
    },
  };

  componentDidMount = () => {
    if (this.storage && this.storage.data) {
      this.todos.list = this.storage.data;
      this.setState({ todos: this.storage.data });
    }
  };

  render = () => (
    <AppContainer todos={this.state.todos} actions={this.actions} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
