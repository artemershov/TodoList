import React, { Fragment } from 'react';
import Task from './Task';
import TaskForm from '../TaskForm';
import TaskInfo from '../TaskInfo';
import Collapse from '../shared/Collapse';

export default class TaskContainer extends React.Component {
  state = {
    infoOpen: false,
    formOpen: false,
  };

  formSubmit = data => {
    this.props.actions('edit')(this.props.data.id, data);
    this.setState({ formOpen: false });
  };

  taskActions = {
    check: () => {
      this.props.actions('check')(this.props.data.id);
      this.setState({ infoOpen: false });
    },
    edit: () => this.setState({ formOpen: true }),
    remove: () => {
      if (confirm('Вы точно хотите удалить данную задачу?')) {
        this.props.actions('remove')(this.props.data.id, this.props.groupId);
      }
    },
    info: () => this.setState({ infoOpen: !this.state.infoOpen }),
  };

  taskInfoActions = {
    description: this.props.actions('editDescription'),
    comments: {
      add: this.props.actions('commentAdd'),
      edit: this.props.actions('commentEdit'),
      remove: this.props.actions('commentRemove'),
    },
    subtasks: {
      add: this.props.actions('subtaskAdd'),
      edit: this.props.actions('subtaskEdit'),
      check: this.props.actions('subtaskCheck'),
      remove: this.props.actions('subtaskRemove'),
    },
  };

  render = () => (
    <Fragment>
      {this.state.formOpen ? (
        <div className="px-2">
          <TaskForm data={this.props.data} submit={this.formSubmit} />
        </div>
      ) : (
        <Task data={this.props.data} actions={this.taskActions} />
      )}
      <Collapse isOpen={this.state.infoOpen}>
        <TaskInfo data={this.props.data} actions={this.taskInfoActions} />
      </Collapse>
    </Fragment>
  );
}
