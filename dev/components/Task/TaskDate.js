import React from 'react';
import FormattedDate from '../shared/FormattedDate';

const TaskDate = props => (
  <div className="text-muted small">
    {props.date.deadline && (
      <span className="mr-2">
        Дедлайн: <FormattedDate date={props.date.deadline} />
      </span>
    )}
    <span className="mr-2">
      {props.done ? 'Завершено: ' : 'Добавлено: '}
      <FormattedDate date={props.done ? props.date.done : props.date.add} />
    </span>
  </div>
);

export default TaskDate;
