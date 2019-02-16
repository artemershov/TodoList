import React, { Fragment } from 'react';
import Header from './Header';
import TaskGroup from '../TaskGroup';
import Sidebar from '../Sidebar';
import RemoveDoneBtn from './RemoveDoneBtn';
import Container from 'reactstrap/lib/Container';

const Layout = () => (
  <Fragment>
    <Header />
    <Container className="pt-5">
      <TaskGroup />
      <RemoveDoneBtn className="d-block mx-auto mb-4" />
    </Container>
    <Sidebar />
  </Fragment>
);

export default Layout;
