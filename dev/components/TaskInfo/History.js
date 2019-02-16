import React from 'react';
import FormattedDate from '../shared/FormattedDate';
import taskEventCodes from '../../class/Task/param/taskEventCodes';

const History = props =>
  props.data.order.map(i => (
    <div className="px-3 py-2 mb-3 border rounded bg-light" key={i}>
      {taskEventCodes[props.data.list[i].event]}{' '}
      <FormattedDate date={props.data.list[i].date} />
    </div>
  ));

export default History;
