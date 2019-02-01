import React from 'react';
import TaskForm from '../TaskForm';
import TaskListContainer from '../TaskList';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';

export default class TaskGroup extends React.Component {
  submit = this.props.todoActions('add');
  render = () =>
    this.props.groups &&
    this.props.groups.map((el, idx) => (
      <div key={idx}>
        <h1 className="display-3 text-white text-center my-4">{el.title}</h1>
        <Card className="mb-4">
          <CardHeader className="px-3">
            <TaskForm submit={this.submit} />
          </CardHeader>
          <TaskListContainer list={el.list} actions={this.props.todoActions} />
        </Card>
      </div>
    ));
}
