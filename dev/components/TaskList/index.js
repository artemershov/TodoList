import React from 'react';
import TaskList from './TaskList';
import Placeholder from '../shared/Placeholder';

const TaskListContainer = props =>
  props.list.length ? (
    <TaskList list={props.list} actions={props.actions} />
  ) : (
    <Placeholder
      className="my-4"
      title="Нет задач"
      description="Добавьте новые задачи используя форму выше"
    />
  );

export default TaskListContainer;
