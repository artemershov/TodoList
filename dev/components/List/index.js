import React from 'react';
import List from './List.js';
import Placeholder from './Placeholder.js';

const TodoList = props =>
  props.list.length ? (
    <List list={props.list} actions={props.actions} />
  ) : (
    <Placeholder />
  );

export default TodoList;
