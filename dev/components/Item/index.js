import React from 'react';
import Task from './Task.js';
import EditForm from './EditForm.js';

export default class TodoItem extends React.Component {
  state = {
    formOpen: false,
  };
  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  render = () =>
    this.state.formOpen ? (
      <EditForm
        data={this.props.data}
        submit={this.props.actions.edit}
        cancel={this.formToggle}
      />
    ) : (
      <Task
        data={this.props.data}
        edit={this.formToggle}
        actions={this.props.actions}
      />
    );
}
