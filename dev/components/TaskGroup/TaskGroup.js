import React, { Fragment } from 'react';
import TaskForm from '../TaskForm';
import TaskListContainer from '../TaskList';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';

export default class TaskGroup extends React.Component {
  shouldComponentUpdate = nextProps =>
    !this.props.data.lastUpdate ||
    this.props.data.lastUpdate !== nextProps.data.lastUpdate;
  render = () => (
    <Fragment>
      <h1 className="display-4 text-white text-center my-4">
        {this.props.data.title}
      </h1>
      <Card className="mb-4 shadow">
        {this.props.data.id && (
          <CardHeader className="px-3">
            <TaskForm submit={this.props.actions('add')} />
          </CardHeader>
        )}
        <TaskListContainer
          list={this.props.data.list}
          actions={this.props.actions}
        />
      </Card>
    </Fragment>
  );
}
