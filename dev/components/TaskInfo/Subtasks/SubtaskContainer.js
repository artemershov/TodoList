import React from 'react';
import SimpleForm from '../../shared/SimpleForm';
import Task from '../../Task/Task';

export default class SubtaskList extends React.Component {
  state = { formOpen: false };

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  formSubmit = value => {
    if (this.props.data.title !== value) {
      this.props.actions.edit(this.props.id, this.props.data.id, value);
    }
    this.formToggle();
  };

  taskCheck = () => this.props.actions.check(this.props.id, this.props.data.id);
  taskRemove = () => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      this.props.actions.remove(this.props.id, this.props.data.id);
    }
  };

  render = () =>
    this.state.formOpen ? (
      <SimpleForm
        submit={this.formSubmit}
        value={this.props.data.title}
        placeholder="Название задачи"
      />
    ) : (
      <Task
        sub
        data={this.props.data}
        actions={{
          edit: this.formToggle,
          check: this.taskCheck,
          remove: this.taskRemove,
        }}
      />
    );
}
