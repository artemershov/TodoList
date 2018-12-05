import React from 'react';
import TaskList from './TaskList.js';
import TaskListPlaceholder from './TaskListPlaceholder.js';

const TaskListContainer = props =>
  props.list.length ? (
    <TaskList list={props.list} actions={props.actions} />
  ) : (
    <TaskListPlaceholder />
  );

export default TaskListContainer;
