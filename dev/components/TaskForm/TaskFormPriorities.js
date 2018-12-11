import React from 'react';
import Input from 'reactstrap/lib/Input';
import { taskPriorities } from '../../class/Task';

const TaskFormPriorities = props => (
  <Input
    type="select"
    data-prop="priority"
    onChange={props.onChange}
    value={props.value}>
    {taskPriorities.levels.map(i => (
      <option key={i} value={i}>
        {taskPriorities[i].title}
      </option>
    ))}
  </Input>
);

export default TaskFormPriorities;
