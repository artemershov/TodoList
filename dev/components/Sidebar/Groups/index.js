import React from 'react';
import { connect } from 'react-redux';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import SimpleForm from '../../shared/SimpleForm';
import GroupContainer from './GroupContainer';

const Groups = props => (
  <Card>
    <CardHeader className="px-3">
      <SimpleForm submit={props.add} placeholder="Название группы" />
    </CardHeader>
    <ListGroup flush>
      {props.groups.map(i => (
        <ListGroupItem className="px-2" key={i.id}>
          <GroupContainer data={i} />
        </ListGroupItem>
      ))}
    </ListGroup>
  </Card>
);

const mapState = state => ({ groups: state.groups });
const mapDispatch = dispatch => ({
  add: data => dispatch({ type: 'GROUP_ADD', data }),
});
export default connect(
  mapState,
  mapDispatch
)(Groups);
