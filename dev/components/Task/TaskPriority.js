import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import { taskPriorities } from '../../class/Task';

const TaskPriority = props => (
  <Badge color={taskPriorities[props.level].color}>
    {taskPriorities[props.level].title}
  </Badge>
);

export default TaskPriority;
