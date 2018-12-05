import React from 'react';
import RelativeDate from '../shared/RelativeDate.js';

const TaskDate = props => (
  <div className="text-muted small">
    {props.date.deadline && (
      <span className="mr-2">
        Дедлайн: <RelativeDate date={props.date.deadline} />
      </span>
    )}
    <span className="mr-2">
      {props.done ? 'Завершено: ' : 'Добавлено: '}
      <RelativeDate date={props.done ? props.date.done : props.date.add} />
    </span>
  </div>
);

export default TaskDate;
