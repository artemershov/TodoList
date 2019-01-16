import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList';
import SettingsClass, { filtering, sorting } from './class/Settings';
import WebStorageClass from './class/WebStorage';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const WebStorage = WebStorageClass('TodoList');
const data = WebStorage && WebStorage.get();
const Todo = new TodoList(data && data.todo || null);
const Settings = new SettingsClass(data && data.settings || null);

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
    if (WebStorage) {
      WebStorage.set({
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
