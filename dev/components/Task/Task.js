import React from 'react';
import TaskCheckBtn from './TaskCheckBtn';
import TaskTitle from './TaskTitle';
import ActionsMenu from '../shared/ActionsMenu';

const Task = props => (
  <div className="d-flex align-items-center">
    <div>
      <TaskCheckBtn onClick={props.actions.check} done={props.data.done} />
    </div>
    {props.sub ? (
      <div className="flex-fill px-2">{props.data.title}</div>
    ) : (
      <TaskTitle data={props.data} action={props.actions.info} />
    )}
    <div>
      <ActionsMenu actions={props.actions} />
    </div>
  </div>
);

export default Task;
