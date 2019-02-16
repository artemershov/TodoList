import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import TaskForm from '../TaskForm';
import TaskInfo from '../TaskInfo';
import Collapse from '../shared/Collapse';

class TaskContainer extends React.Component {
  state = {
    infoOpen: false,
    formOpen: false,
  };

  actions = this.props.actions(this.props.groupId, this.props.data.id);

  formSubmit = data => {
    this.actions.task.edit(data);
    this.setState({ formOpen: false });
  };

  taskActions = {
    check: () => {
      this.actions.task.check();
      this.setState({ infoOpen: false });
    },
    edit: () => this.setState({ formOpen: true }),
    remove: () => {
      if (confirm('Вы точно хотите удалить данную задачу?')) {
        this.actions.task.remove();
      }
    },
    info: () => this.setState({ infoOpen: !this.state.infoOpen }),
  };

  render = () => (
    <Fragment>
      {this.state.formOpen ? (
        <TaskForm
          className="px-2"
          data={this.props.data}
          submit={this.formSubmit}
        />
      ) : (
        <Task data={this.props.data} actions={this.taskActions} />
      )}
      <Collapse isOpen={this.state.infoOpen}>
        <TaskInfo data={this.props.data} actions={this.actions.info} />
      </Collapse>
    </Fragment>
  );
}

const mapDispatch = dispatch => ({
  actions: (groupId, taskId) => {
    const ids = { groupId, taskId };
    return {
      task: {
        edit: data => dispatch({ type: 'TASK_EDIT', ...ids, data }),
        check: () => dispatch({ type: 'TASK_CHECK', ...ids }),
        remove: () => dispatch({ type: 'TASK_REMOVE', ...ids }),
      },
      info: {
        description: data =>
          dispatch({ type: 'TASK_EDIT_DESCRIPTION', ...ids, data }),
        comments: {
          add: data => dispatch({ type: 'COMMENT_ADD', ...ids, data }),
          edit: (id, data) =>
            dispatch({ type: 'COMMENT_EDIT', ...ids, id, data }),
          remove: id => dispatch({ type: 'COMMENT_REMOVE', ...ids, id }),
        },
        subtasks: {
          add: data => dispatch({ type: 'SUBTASK_ADD', ...ids, data }),
          edit: (id, data) =>
            dispatch({ type: 'SUBTASK_EDIT', ...ids, id, data }),
          check: id => dispatch({ type: 'SUBTASK_CHECK', ...ids, id }),
          remove: id => dispatch({ type: 'SUBTASK_REMOVE', ...ids, id }),
        },
      },
    };
  },
});
export default connect(
  undefined,
  mapDispatch
)(TaskContainer);
