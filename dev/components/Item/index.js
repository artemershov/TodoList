import React from 'react';
import Task from './Task.js';
import TaskForm from '../Form';
import { merge } from 'lodash';

export default class TodoItem extends React.Component {
  state = { formOpen: false };
  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  editFormSubmit = data => {
    const task = merge(this.props.data, {
      title: data.title,
      priority: data.priority,
      date: {
        deadline: data.deadline ? data.deadline.getTime() : null
      },
    });
    this.props.actions.edit(task);
    this.formToggle();
  };
  render = () =>
    this.state.formOpen ? (
      <div className="px-2">
        <TaskForm data={this.props.data} submit={this.editFormSubmit} />
      </div>
    ) : (
      <Task
        data={this.props.data}
        edit={this.formToggle}
        actions={this.props.actions}
      />
    );
}
