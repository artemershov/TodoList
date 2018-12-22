import React from 'react';
import TaskGroup from './TaskGroup';
import RemoveDoneBtn from './shared/RemoveDoneBtn';
import Container from 'reactstrap/lib/Container';

const AppContainer = props => (
  <Container>
    <TaskGroup list={props.list} actions={props.actions} />
    <div className="text-center mb-4">
      <RemoveDoneBtn remove={props.actions.removeDone} />
    </div>
  </Container>
);

export default AppContainer;
