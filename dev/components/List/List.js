import React from 'react';
import TodoItem from '../Item';
import { ListGroup, ListGroupItem } from 'reactstrap';

const List = props => (
  <ListGroup flush>
    {props.list.map(i => (
      <ListGroupItem className="px-2" key={i.id}>
        <TodoItem data={i} actions={props.actions} />
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default List;
