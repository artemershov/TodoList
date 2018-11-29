import React from 'react';
import List from './List.js';
import Placeholder from './Placeholder.js';

const TodoList = props =>
  props.todos.length ? (
    <List todos={props.todos} actions={props.actions} />
  ) : (
    <Placeholder />
  );

export default TodoList;
