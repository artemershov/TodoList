import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppClass from './class/TodoApp';
import AppContainer from './components/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = new TodoAppClass();

class App extends React.Component {
  state = {
    groups: [],
    settings: {},
  };

  todoActions = method => (...args) => {
    TodoApp.todoActions(method, ...args);
    this.setState({ groups: TodoApp.getGroups() });
  };

  groupsActions = method => (...args) => {
    TodoApp.groupsActions(method, ...args);
    this.setState({ groups: TodoApp.getGroups() });
  };

  settingsActions = method => (...args) => {
    TodoApp.settingsActions(method, ...args);
    this.setState({ settings: TodoApp.getSettings(), groups: TodoApp.getGroups() });
  };

  searchAction = query => {
    this.setState({ groups: TodoApp.searchAction(query) });
  };

  componentDidMount = () => {
    this.setState({
      groups: TodoApp.getGroups(),
      settings: TodoApp.getSettings(),
    });
  };

  render = () => (
    <AppContainer
      searchAction={this.searchAction}
      todoActions={this.todoActions}
      groups={this.state.groups}
      groupsActions={this.groupsActions}
      settings={this.state.settings}
      settingsActions={this.settingsActions}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
