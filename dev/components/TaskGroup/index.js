import React from 'react';
import { connect } from 'react-redux';
import TaskGroup from './TaskGroup';

const TaskGroupContainer = props => {
  const data = props.search.length ? props.search : props.groups;
  return data.map(el => <TaskGroup key={el.id} data={el} />);
};

const mapState = state => ({
  groups: state.groups,
  search: state.search,
});
export default connect(mapState)(TaskGroupContainer);
