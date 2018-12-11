import React from 'react';
import Card from 'reactstrap/lib/Card';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import SubtaskContainer from './SubtaskContainer';

const SubtaskList = props => (
  <Card className="mb-2">
    <ListGroup flush>
      {props.data.order.map(i => (
        <ListGroupItem className="p-2" key={i}>
          <SubtaskContainer
            id={props.id}
            data={props.data.list[i]}
            actions={props.actions}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  </Card>
);

export default SubtaskList;
