import React from 'react';
import TodoList from '../List';
import AddForm from './AddForm.js';
import RemoveDoneBtn from './RemoveDoneBtn.js';
import { Container, Card, CardHeader } from 'reactstrap';

const AppContainer = props => (
  <Container>
    <h1 className="display-3 text-white text-center my-4">TodoList</h1>
    <Card className="mb-4">
      <CardHeader className="px-3">
        <AddForm submit={props.actions.add} />
      </CardHeader>
      <TodoList todos={props.todos} actions={props.actions} />
    </Card>
    <div className="text-center mb-4">
      <RemoveDoneBtn remove={props.actions.removeDone} />
    </div>
  </Container>
);

export default AppContainer;
