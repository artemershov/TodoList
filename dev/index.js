// Scripts
import React             from 'react';
import ReactDOM          from 'react-dom';

// Classes
import TodoList          from './class/TodoList.js';
import BrowserStorage    from './class/BrowserStorage.js';

// Components
import TodoListContainer from './components/TodoListContainer.js';
import AddForm           from './components/AddForm.js';
import RemoveDoneBtn     from './components/RemoveDoneBtn.js';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './icons/css/fontello.css';

// App class
class App extends React.Component {

  constructor(props) {
    super(props);
    this.todos = new TodoList();
    // localStorage doesn't work on file:// urls
    try {
      this.storage = new BrowserStorage('TodoList');
    } catch(e) {}
    this.state = {
      todos: []
    };
  }

  actions = {
    add: data => {
      const todos = this.todos.add(data);
      if (this.storage) this.storage.data = todos;
      this.setState({todos});
    },
    edit: data => {
      this.todos.edit(data);
      const todos = this.todos.sort();
      if (this.storage) this.storage.data = todos;
      this.setState({todos});
    },
    remove: data => {
      const todos = this.todos.remove(data);
      if (this.storage) this.storage.data = todos;
      this.setState({todos});
    },
    removeDone: () => {
      const todos = this.todos.removeDone();
      if (this.storage) this.storage.data = todos;
      this.setState({todos});
    }
  }

  componentDidMount = () => {
    if (this.storage && this.storage.data) {
      this.todos.list = this.storage.data;
      this.setState({todos: this.storage.data});
    }
  }
  render = () => pug`
    section.container
      .row.justify-content-center
        .col-12.col-lg-12
          h1.display-3.text-white.text-center.my-4 TodoList
          .card.mb-4
            .card-header.px-3
              AddForm(submit=this.actions.add)
            TodoListContainer(
              todos=this.state.todos,
              actions=this.actions
            )
          .text-center.mb-4
            RemoveDoneBtn(actions=this.actions)
  `

}

// Render
ReactDOM.render(<App />, document.getElementById('app'));
