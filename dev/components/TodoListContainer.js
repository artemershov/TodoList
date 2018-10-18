import React from 'react';
import TodoList from './TodoList.js';
import TodoListPlaceholder from './TodoListPlaceholder.js';

export default class TodoContainer extends React.Component {
  render = () => pug`
    if this.props.todos.length
      TodoList(
        todos=this.props.todos,
        actions=this.props.actions
      )
    else
      TodoListPlaceholder
  `;
}
