import React, { Fragment } from 'react';
import styled from 'styled-components';
import TaskForm from '../TaskForm';
import TaskListContainer from '../TaskList';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';

const Title = styled.h1`
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.45);
  font-size: 3.5rem;
  font-weight: 300;
  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
`;

export default class TaskGroup extends React.Component {
  shouldComponentUpdate = nextProps =>
    !this.props.data.lastUpdate ||
    this.props.data.lastUpdate !== nextProps.data.lastUpdate;
  render = () => (
    <Fragment>
      <Title className="text-white text-center my-4">
        {this.props.data.title}
      </Title>
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
