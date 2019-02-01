import React from 'react';
import TaskList from './TaskList';
import TaskListPlaceholder from './TaskListPlaceholder';

const TaskListContainer = props =>
  props.list.length ? (
    <TaskList
      groupId={props.groupId}
      list={props.list}
      actions={props.actions}
    />
  ) : (
    <TaskListPlaceholder />
  );

export default TaskListContainer;
