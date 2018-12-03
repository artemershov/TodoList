import React from 'react';
import Task from './Task.js';
import TaskForm from '../Form';
import { merge } from 'lodash';

export default class TodoItem extends React.Component {
  state = { formOpen: false };

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  formSubmit = data => {
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

  taskCheck = () => {
    const task = merge(this.props.date, {
      done: !this.props.data.done,
      date: {
        done: new Date().getTime(),
      }
    });
    this.props.actions.edit(task);
  };
  taskRemove = () => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      this.props.actions.remove(this.props.data);
    }
  }

  render = () =>
    this.state.formOpen ? (
      <div className="px-2">
        <TaskForm data={this.props.data} submit={this.formSubmit} />
      </div>
    ) : (
      <Task
        data={this.props.data}
        actions={{
          check: this.taskCheck,
          edit: this.formToggle,
          remove: this.taskRemove,
        }}
      />
    );
}
