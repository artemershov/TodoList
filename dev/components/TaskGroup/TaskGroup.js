import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TaskForm from '../TaskForm';
import TaskListContainer from './TaskListContainer';
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

class TaskGroup extends React.Component {
  submit = data =>
    this.props.dispatch({
      type: 'TASK_ADD',
      groupId: this.props.data.id,
      data,
    });
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
            <TaskForm submit={this.submit} />
          </CardHeader>
        )}
        <TaskListContainer
          list={this.props.data.list}
          groupId={this.props.data.id}
        />
      </Card>
    </Fragment>
  );
}

export default connect()(TaskGroup);
