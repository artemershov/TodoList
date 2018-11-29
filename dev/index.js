// React
import React from 'react';
import ReactDOM from 'react-dom';

// Classes
import TodoList from './class/TodoList.js';
import BrowserStorage from './class/BrowserStorage.js';

// Components
import TodoListContainer from './components/TodoListContainer.js';
import AddForm from './components/AddForm.js';
import RemoveDoneBtn from './components/RemoveDoneBtn.js';

// Bootstrap
import { Container, Card, CardHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// App class
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
    <Container>
      <h1 className="display-3 text-white text-center my-4">TodoList</h1>
      <Card className="mb-4">
        <CardHeader className="px-3">
          <AddForm submit={this.actions.add} />
        </CardHeader>
        <TodoListContainer todos={this.state.todos} actions={this.actions} />
      </Card>
      <div className="text-center mb-4">
        <RemoveDoneBtn actions={this.actions} />
      </div>
    </Container>
  );
}

// Render
ReactDOM.render(<App />, document.getElementById('app'));
