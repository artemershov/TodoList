import React from 'react';
import TaskContainer from '../Task';
import { ListGroup, ListGroupItem } from 'reactstrap';

const TaskList = props => (
  <ListGroup flush>
    {props.list.map(i => (
      <ListGroupItem className="px-2" key={i.id}>
        <TaskContainer data={i} actions={props.actions} />
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default TaskList;
