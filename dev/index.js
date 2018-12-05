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
    editDescription: (id, data) => {
      Todo.editDescription(id, data);
      this.updateStorage();
    },
    comments: {
      add: (taskId, message) => {
        Todo.commentAdd(taskId, message);
        this.updateStorage();
      },
      edit: (taskId, id, message) => {
        Todo.commentEdit(taskId, id, message);
        this.updateStorage();
      },
      remove: (taskId, id) => {
        Todo.commentRemove(taskId, id);
        this.updateStorage();
      },
    },
    subtasks: {
      add: (taskId, title) => {
        Todo.subtaskAdd(taskId, title);
        this.updateStorage();
      },
      edit: (taskId, id, title) => {
        Todo.subtaskEdit(taskId, id, title);
        this.updateStorage();
      },
      check: (taskId, id) => {
        Todo.subtaskCheck(taskId, id);
        this.updateStorage();
      },
      remove: (taskId, id) => {
        Todo.subtaskRemove(taskId, id);
        this.updateStorage();
      },
    },
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
