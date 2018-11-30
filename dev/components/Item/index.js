import React from 'react';
import Task from './Task.js';
import AddForm from '../Container/AddForm.js';

export default class TodoItem extends React.Component {
  state = {
    formOpen: false,
  };
  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  editFormSubmit = data => {
    this.props.actions.edit(data);
    this.formToggle();
  };
  render = () =>
    this.state.formOpen ? (
      <div className="px-2">
        <AddForm data={this.props.data} submit={this.editFormSubmit} />
      </div>
    ) : (
      <Task
        data={this.props.data}
        edit={this.formToggle}
        actions={this.props.actions}
      />
    );
}
