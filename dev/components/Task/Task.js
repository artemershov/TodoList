import React from 'react';
import CheckButton from '../shared/CheckButton';
import ActionsMenu from '../shared/ActionsMenu';
import TaskDate from './TaskDate';
import TaskPriority from './TaskPriority';

const style = {
  cursor: 'pointer',
};

const Task = props => (
  <div className="d-flex align-items-center">
    <div>
      <CheckButton onClick={props.actions.check} done={props.data.done} />
    </div>
    <div className="flex-fill px-2" style={{ lineHeight: 1.2 }}>
      <div
        className="font-weight-bold"
        onClick={props.actions.info}
        style={style}>
        {props.data.title}
      </div>
      <TaskDate date={props.data.date} done={props.data.done} />
    </div>
    {Boolean(Number(props.data.priority)) && (
      <div className="px-2">
        <TaskPriority level={props.data.priority} />
      </div>
    )}
    <div>
      <ActionsMenu actions={props.actions} />
    </div>
  </div>
);

export default Task;
