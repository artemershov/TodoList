import React from 'react';
import { Badge } from 'reactstrap';
import { priorities } from '../../class/Todo.js';

const Priority = props => (
  <Badge color={priorities[props.level].color}>
    {priorities[props.level].title}
  </Badge>
);

export default Priority;
