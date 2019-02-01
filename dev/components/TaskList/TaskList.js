import React from 'react';
import TaskContainer from '../Task';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

const TaskList = props => (
  <ListGroup flush>
    {props.list.map(i => (
      <ListGroupItem className="px-2" key={i.id}>
        <TaskContainer
          groupId={props.groupId}
          data={i}
          actions={props.actions}
        />
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default TaskList;
