import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'reactstrap';
import SubtaskContainer from './SubtaskContainer.js';

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
