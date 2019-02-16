import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import taskPriorities from '../../class/Task/param/taskPriorities';

const TaskPriority = props => (
  <Badge className={props.className} color={taskPriorities[props.level].color}>
    {taskPriorities[props.level].title}
  </Badge>
);

export default TaskPriority;
