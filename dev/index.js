import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList';
import SettingsClass from './class/Settings';
import BrowserStorage from './class/BrowserStorage';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = new TodoList();
const Settings = new SettingsClass();
let storage;
try {
  storage = new BrowserStorage('TodoList');
} catch (e) {
  // localStorage doesn't work on file:// urls
  storage = null;
}

class App extends React.Component {
  state = {
    todo: [],
    settings: {},
  };

  todoActions = method => (...args) => {
    Todo[method](...args);
    this.updateTodo();
  };

  settingsActions = method => (...args) => {
    Settings[method](...args);
    this.updateSettings();
  };

  updateTodo = () => {
    Todo.sort(['date.done', 'date.add', 'done'], true);
    this.updateStorage();
    this.setState({ todo: Todo.getOrderedList() });
  };

  updateSettings = () => {
    this.updateStorage();
    this.setState({ settings: Settings.getData() });
  };

  updateStorage = () => {
    if (storage) {
      storage.set({
        todo: Todo.getData(),
        settings: Settings.getData(),
      });
    }
  };

  componentDidMount = () => {
    if (storage && storage.get()) {
      const data = storage.get();
      Todo.setData(data.todo);
      Settings.setData(data.settings);
      this.setState({
        todo: Todo.getOrderedList(),
        settings: Settings.getData(),
      });
    }
  };

  render = () => (
    <AppContainer
      todo={this.state.todo}
      todoActions={this.todoActions}
      settings={this.state.settings}
      settingsActions={this.settingsActions}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
