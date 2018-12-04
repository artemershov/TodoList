import React from 'react';
import TodoList from '../List';
import TaskForm from '../Form';
import RemoveDoneBtn from './RemoveDoneBtn.js';
import { Container, Card, CardHeader } from 'reactstrap';

const AppContainer = props => (
  <Container>
    <h1 className="display-3 text-white text-center my-4">TodoList</h1>
    <Card className="mb-4">
      <CardHeader className="px-3">
        <TaskForm submit={props.actions.add} />
      </CardHeader>
      <TodoList list={props.list} actions={props.actions} />
    </Card>
    <div className="text-center mb-4">
      <RemoveDoneBtn remove={props.actions.removeDone} />
    </div>
  </Container>
);

export default AppContainer;
