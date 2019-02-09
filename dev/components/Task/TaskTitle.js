import React from 'react';
import styled from 'styled-components';
import TaskDate from './TaskDate';
import TaskInfoStatus from './TaskInfoStatus';
import TaskPriority from './TaskPriority';

const Title = styled.div`
  line-height: 1.1;
  cursor: pointer;
  @media (min-width: 576px) {
    line-height: 1.2;
  }
`;

const TaskTitle = props => (
  <div className="d-sm-flex flex-fill px-2 px-sm-0">
    <Title className="px-sm-2 mb-2 mb-sm-0 flex-fill" onClick={props.action}>
      <div className="mb-1 mb-sm-0 font-weight-bold">{props.data.title}</div>
      <TaskDate
        className={!props.data.date.deadline && 'd-none d-sm-block'}
        date={props.data.date}
      />
    </Title>
    <div className="d-flex align-items-center flex-row-reverse flex-sm-row justify-content-end justify-content-sm-start">
      <TaskInfoStatus data={props.data} />
      {Boolean(Number(props.data.priority)) && (
        <TaskPriority className="mr-2" level={props.data.priority} />
      )}
    </div>
  </div>
);

export default TaskTitle;
