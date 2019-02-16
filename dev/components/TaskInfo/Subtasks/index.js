import React, { Fragment } from 'react';
import SimpleForm from '../../shared/SimpleForm';
import SubtaskList from './SubtaskList';
import Placeholder from '../../shared/Placeholder';

const SubTasks = props => (
  <Fragment>
    <SimpleForm
      className="mb-3"
      submit={props.actions.add}
      placeholder="Название задачи"
    />
    {props.data.order.length ? (
      <SubtaskList data={props.data} actions={props.actions} />
    ) : (
      <Placeholder
        title="Нет задач"
        description="Добавьте задачи используя форму выше"
      />
    )}
  </Fragment>
);

export default SubTasks;
