import React from 'react';
import TaskForm from '../TaskForm';
import TaskListContainer from '../TaskList';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';

export default class TaskGroup extends React.Component {
  submit = this.props.actions('add');
  render = () => (
    <div>
      <h1 className="display-3 text-white text-center my-4">TodoList</h1>
      <Card className="mb-4">
        <CardHeader className="px-3">
          <TaskForm submit={this.submit} />
        </CardHeader>
        <TaskListContainer
          list={this.props.list}
          actions={this.props.actions}
        />
      </Card>
    </div>
  );
}
