import React from 'react';
import ActionsMenu from '../../shared/ActionsMenu';
import WordBreaker from '../../shared/WordBreaker';

const Group = props => (
  <div className="d-flex align-items-center">
    <WordBreaker className="flex-fill px-2">{props.title}</WordBreaker>
    <div>
      <ActionsMenu actions={props.actions} />
    </div>
  </div>
);

export default Group;
