import React from 'react';
import RelativeDate from '../../shared/RelativeDate.js';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

const Comment = props => (
  <div className="px-3 py-2 mb-3 border rounded bg-light">
    <div className="d-flex align-items-center">
      <div className="flex-fill">
        <div>{props.data.message}</div>
        <div className="text-muted small">
          <RelativeDate date={props.data.date} />
        </div>
      </div>
      <div>
        <Button
          close
          style={{ fontSize: 16 }}
          data-id={props.data.id}
          onClick={props.remove}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  </div>
);

export default Comment;
