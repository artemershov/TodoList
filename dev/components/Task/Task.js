import React from 'react';
import styled from 'styled-components';
import CheckButton from '../shared/CheckButton';
import ActionsMenu from '../shared/ActionsMenu';
import TaskDate from './TaskDate';
import TaskPriority from './TaskPriority';
import WordBreaker from '../shared/WordBreaker';

const Title = styled.div`
  line-height: 1.2;
  cursor: pointer;
`;

const Task = props => (
  <div className="d-flex align-items-center">
    <div>
      <CheckButton onClick={props.actions.check} done={props.data.done} />
    </div>
    <Title className="flex-fill px-2" onClick={props.actions.info}>
      <WordBreaker className="font-weight-bold">{props.data.title}</WordBreaker>
      <TaskDate date={props.data.date} done={props.data.done} />
    </Title>
    {Boolean(Number(props.data.priority)) && (
      <div className="px-2">
        <TaskPriority level={props.data.priority} />
      </div>
    )}
    <div>
      <ActionsMenu actions={props.actions} />
    </div>
  </div>
);

export default Task;
