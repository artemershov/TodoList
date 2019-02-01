import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './class/TodoList';
import GroupList from './class/Groups';
import SettingsClass, { filterParam, sortParam } from './class/Settings';
import WebStorageClass from './class/WebStorage';
import AppContainer from './components/AppContainer';
import pullAll from 'lodash/pullAll';
import 'bootstrap/dist/css/bootstrap.min.css';

const WebStorage = WebStorageClass('TodoList');
const data = WebStorage && WebStorage.get();
const Todo = new TodoList((data && data.todo) || null);
const Group = new GroupList((data && data.group) || null);
const Settings = new SettingsClass((data && data.settings) || null);

class App extends React.Component {
  state = {
    groups: [],
    settings: {},
  };

  todoActions = method => (...args) => {
    Todo[method](...args);
    const methodsToUpdate = ['add', 'edit', 'check', 'remove', 'removeDone'];
    if (methodsToUpdate.includes(method)) this.updateOrder();
    this.setState({ groups: this.getGroups() }, this.updateStorage);
  };

  groupsActions = method => (...args) => {
    Group[method](...args);
    this.setState({ groups: this.getGroups() }, this.updateStorage);
  };

  settingsActions = method => (...args) => {
    Settings[method](...args);
    this.updateOrder();
    this.setState(
      { settings: Settings.getData(), groups: this.getGroups() },
      this.updateStorage
    );
  };

  getGroups = () => {
    const taskList = Todo.getList();
    const taskOrder = Todo.getOrder();
    const groups = Group.getOrderedList().map(group => {
      const groupList = group.list;
      group.list = taskOrder
        .filter(i => groupList.includes(i))
        .map(taskId => taskList[taskId]);
      pullAll(taskOrder, groupList);
      return group;
    });
    if (taskOrder.length) {
      groups.push({
        title: 'Без группы',
        list: taskOrder.map(i => taskList[i]),
      });
    }
    return groups;
  };

  updateOrder = () => {
    const settings = Settings.getData();
    Todo.updateOrder({
      filter: filterParam[settings.filter].param,
      sort: sortParam[settings.sort].param,
      reverse: settings.reverse,
    });
  };

  updateStorage = () => {
    if (WebStorage) {
      WebStorage.set({
        todo: Todo.getData(),
        groups: Group.getData(),
        settings: Settings.getData(),
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      groups: this.getGroups(),
      settings: Settings.getData(),
    });
  };

  render = () => (
    <AppContainer
      todoActions={this.todoActions}
      groups={this.state.groups}
      groupsActions={this.groupsActions}
      settings={this.state.settings}
      settingsActions={this.settingsActions}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
