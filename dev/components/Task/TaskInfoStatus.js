import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons/faCommentAlt';

const subtaskStat = list =>
  list.order.reduce(
    (stat, i) => {
      stat[list.list[i].done ? 'done' : 'undone']++;
      return stat;
    },
    {
      done: 0,
      undone: 0,
    }
  );

const TaskInfoStatus = props => (
  <div className="text-muted small">
    {Boolean(props.data.subtasks.order.length) && (
      <span className="text-nowrap mr-2">
        <FontAwesomeIcon icon={faTasks} fixedWidth />{' '}
        {subtaskStat(props.data.subtasks).done} /{' '}
        {props.data.subtasks.order.length}
      </span>
    )}
    {Boolean(props.data.comments.order.length) && (
      <span className="text-nowrap mr-2">
        <FontAwesomeIcon icon={faCommentAlt} fixedWidth />{' '}
        {props.data.comments.order.length}
      </span>
    )}
  </div>
);

export default TaskInfoStatus;
