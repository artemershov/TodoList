import React from 'react';
import Task from './Task.js';
import TaskForm from '../Form';

export default class TodoItem extends React.Component {
  state = { formOpen: false };

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  formSubmit = data => {
    this.props.actions.edit(this.props.data.id, data);
    this.formToggle();
  };

  taskCheck = () => {
    this.props.actions.check(this.props.data.id);
  };
  taskRemove = () => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      this.props.actions.remove(this.props.data.id);
    }
  };

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
