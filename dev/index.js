import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList';
import SettingsClass, { filtering, sorting } from './class/Settings';
import BrowserStorage from './class/BrowserStorage';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = new TodoList();
const Settings = new SettingsClass();
let storage;
try {
  storage = new BrowserStorage('TodoList');
  const { todo, settings } = storage.get();
  Todo.setData(todo);
  Settings.setData(settings);
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
    const methodsToUpdate = ['add', 'edit', 'check', 'remove', 'removeDone'];
    this.updateTodo(methodsToUpdate.includes(method));
  };

  settingsActions = method => (...args) => {
    Settings[method](...args);
    const settings = Settings.getData();
    this.setState({ settings }, () => {
      const methodsToUpdate = ['setFilter', 'setSort', 'setReverse'];
      methodsToUpdate.includes(method)
        ? this.updateTodo(true)
        : this.updateStorage();
    });
  };

  updateTodo = (updateOrder = false) => {
    if (updateOrder) {
      const settings = this.state.settings;
      Todo.setOrderByParams(
        filtering[settings.filter].param,
        sorting[settings.sort].param,
        settings.reverse
      );
    }
    const todo = Todo.getOrderedList();
    this.setState({ todo }, this.updateStorage);
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
    this.setState({
      todo: Todo.getOrderedList(),
      settings: Settings.getData(),
    });
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
