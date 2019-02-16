import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import TaskGroup from '../TaskGroup';
import Sidebar from '../Sidebar';
import RemoveDoneBtn from './RemoveDoneBtn';
import Styles from './Styles';
import Container from 'reactstrap/lib/Container';

const Layout = props => (
  <Fragment>
    <Styles color={props.color} bg={props.url} stretch={props.stretch} />
    <Header />
    <Container className="pt-5">
      <TaskGroup />
      <RemoveDoneBtn className="d-block mx-auto mb-4" />
    </Container>
    <Sidebar />
  </Fragment>
);

const mapState = state => state.styles;
export default connect(mapState)(Layout);
