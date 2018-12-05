import React from 'react';
import TaskForm from './TaskForm';
import TaskListContainer from './TaskList';
import RemoveDoneBtn from './shared/RemoveDoneBtn';
import { Container, Card, CardHeader } from 'reactstrap';

const AppContainer = props => (
  <Container>
    <h1 className="display-3 text-white text-center my-4">TodoList</h1>
    <Card className="mb-4">
      <CardHeader className="px-3">
        <TaskForm submit={props.actions.add} />
      </CardHeader>
      <TaskListContainer list={props.list} actions={props.actions} />
    </Card>
    <div className="text-center mb-4">
      <RemoveDoneBtn remove={props.actions.removeDone} />
    </div>
  </Container>
);

export default AppContainer;
