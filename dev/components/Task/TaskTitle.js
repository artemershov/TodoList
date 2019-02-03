import React, { Fragment } from 'react';
import styled from 'styled-components';
import TaskDate from './TaskDate';
import TaskInfoStatus from './TaskInfoStatus';
import TaskPriority from './TaskPriority';
import WordBreaker from '../shared/WordBreaker';

const Title = styled.div`
  line-height: 1.2;
  cursor: pointer;
`;

const TaskTitle = props => (
  <Fragment>
    <Title className="flex-fill px-2" onClick={props.action}>
      <WordBreaker className="font-weight-bold">{props.data.title}</WordBreaker>
      <TaskDate date={props.data.date} />
    </Title>
    <TaskInfoStatus data={props.data} />
    {Boolean(Number(props.data.priority)) && (
      <TaskPriority className="mx-2" level={props.data.priority} />
    )}
  </Fragment>
);

export default TaskTitle;
