import React, { Fragment } from 'react';
import Header from './Header';
import TaskGroup from './TaskGroup';
import RemoveDoneBtn from './shared/RemoveDoneBtn';
import Container from 'reactstrap/lib/Container';

const AppContainer = props => (
  <Fragment>
    <Header />
    <Container className="pt-5">
      <TaskGroup list={props.list} actions={props.actions} />
      <div className="text-center mb-4">
        <RemoveDoneBtn remove={props.actions.removeDone} />
      </div>
    </Container>
  </Fragment>
);

export default AppContainer;
