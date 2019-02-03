import React from 'react';
import TaskGroup from './TaskGroup';

const TaskGroupContainer = props =>
  props.groups &&
  props.groups.map((el, idx) => (
    <TaskGroup key={idx} data={el} actions={props.todoActions(el.id)} />
  ));

export default TaskGroupContainer;
