import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppClass from './class/TodoApp';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = new TodoAppClass();

class App extends React.Component {
  state = {
    groups: [],
    settings: {},
    searchQuery: null,
    searchResults: null,
  };

  todoActions = groupId => method => (...args) => {
    TodoApp.todoActions(method, groupId, ...args);
    this.searchAction(this.state.searchQuery);
  };

  groupsActions = method => (...args) => {
    TodoApp.groupsActions(method, ...args);
    this.setState({ groups: TodoApp.getGroups() });
  };

  settingsActions = method => (...args) => {
    TodoApp.settingsActions(method, ...args);
    this.setState({
      settings: TodoApp.getSettings(),
      groups: TodoApp.getGroups(),
    });
  };

  stylesActions = method => (...args) => {
    TodoApp.stylesActions(method, ...args);
    this.setState({ styles: TodoApp.getStyles() });
    TodoApp.stylesActions('updateStyle');
  };

  searchAction = query => {
    if (query) {
      this.setState({
        searchQuery: query,
        searchResults: TodoApp.searchAction(query)
      });
    } else {
      this.setState({
        groups: TodoApp.getGroups(),
        searchQuery: null,
        searchResults: null,
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      groups: TodoApp.getGroups(),
      settings: TodoApp.getSettings(),
      styles: TodoApp.getStyles(),
    });
    TodoApp.stylesActions('updateStyle');
  };

  render = () => (
    <Layout
      searchResults={this.state.searchResults}
      searchAction={this.searchAction}
      todoActions={this.todoActions}
      groups={this.state.groups}
      groupsActions={this.groupsActions}
      settings={this.state.settings}
      settingsActions={this.settingsActions}
      styles={this.state.styles}
      stylesActions={this.stylesActions}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
