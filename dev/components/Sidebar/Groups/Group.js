import React from 'react';
import ActionsMenu from '../../shared/ActionsMenu';

const Group = props => (
  <div className="d-flex align-items-center">
    <div className="flex-fill px-2">{props.title}</div>
    <div>
      <ActionsMenu actions={props.actions} />
    </div>
  </div>
);

export default Group;
