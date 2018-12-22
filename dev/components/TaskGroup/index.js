import React from 'react';
import TaskForm from '../TaskForm';
import TaskListContainer from '../TaskList';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';

const TaskGroup = props => (
  <div>
    <h1 className="display-3 text-white text-center my-4">TodoList</h1>
    <Card className="mb-4">
      <CardHeader className="px-3">
        <TaskForm submit={props.actions.add} />
      </CardHeader>
      <TaskListContainer list={props.list} actions={props.actions} />
    </Card>
  </div>
);

export default TaskGroup;
