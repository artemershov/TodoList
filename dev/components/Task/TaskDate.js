import React, { Fragment } from 'react';
import FormattedDate from '../shared/FormattedDate';

const deadlineClassName = date => {
  const now = Date.now();
  const day = 1 * 24 * 60 * 60 * 1000;
  if (date - now < day) return 'text-danger font-weight-bold small';
  return 'text-body small';
};

const TaskDate = props => (
  <div className={props.className}>
    {props.date.deadline && !props.date.done ? (
      <span className={deadlineClassName(props.date.deadline)}>
        Дедлайн: <FormattedDate date={props.date.deadline} />
      </span>
    ) : (
      <span className="text-black-50 small">
        {props.date.done ? (
          <Fragment>
            Выполненно: <FormattedDate date={props.date.done} />
          </Fragment>
        ) : (
          <Fragment>
            Добавлено: <FormattedDate date={props.date.add} />
          </Fragment>
        )}
      </span>
    )}
  </div>
);

export default TaskDate;
