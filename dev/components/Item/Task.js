import React from 'react';
import CheckButton from './CheckButton.js';
import RelativeDate from './RelativeDate.js';
import ActionsMenu from './ActionsMenu.js';
import Priority from './Priority.js';

const Task = props => (
  <div className="d-flex align-items-center">
    <div>
      <CheckButton onClick={props.actions.check} done={props.data.done} />
    </div>
    <div className="flex-fill px-2" style={{ lineHeight: 1.2 }}>
      <div className="font-weight-bold">{props.data.title}</div>
      <div className="text-muted small">
        {props.data.date.deadline && (
          <span className="mr-2">
            Дедлайн: <RelativeDate date={props.data.date.deadline} />
          </span>
        )}
        <span className="mr-2">
          {props.data.done ? 'Завершено: ' : 'Добавлено: '}
          <RelativeDate
            date={props.data.done ? props.data.date.done : props.data.date.add}
          />
        </span>
      </div>
    </div>
    {Boolean(Number(props.data.priority)) && (
      <div className="px-2">
        <Priority level={props.data.priority} />
      </div>
    )}
    <div>
      <ActionsMenu actions={props.actions} />
    </div>
  </div>
);

export default Task;
