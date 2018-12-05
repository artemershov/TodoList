import React from 'react';
import RelativeDate from '../shared/RelativeDate.js';
import { taskEventCodes } from '../../class/Task.js';

const History = props => (
  <div>
    {props.data.order.map(i => (
      <div className="px-3 py-2 mb-3 border rounded bg-light" key={i}>
        {taskEventCodes[props.data.list[i].event]}{' '}
        <RelativeDate date={props.data.list[i].date} />
      </div>
    ))}
  </div>
);

export default History;
