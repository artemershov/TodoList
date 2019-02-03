import React from 'react';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';

const TaskCheckBtn = props => (
  <Button size="sm" color="link" onClick={props.onClick}>
    <FontAwesomeIcon
      className="lead"
      icon={props.done ? faCheckSquare : faSquare}
    />
  </Button>
);

export default TaskCheckBtn;
