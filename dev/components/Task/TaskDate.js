import React, { Fragment } from 'react';
import FormattedDate from '../shared/FormattedDate';

const TaskDate = props => (
  <div className="text-muted small">
    {props.date.done ? (
      <Fragment>
        Завершено: <FormattedDate date={props.date.done} />
      </Fragment>
    ) : props.date.deadline ? (
      <Fragment>
        Дедлайн: <FormattedDate date={props.date.deadline} />
      </Fragment>
    ) : (
      <Fragment>
        Добавлено: <FormattedDate date={props.date.add} />
      </Fragment>
    )}
  </div>
);

export default TaskDate;
