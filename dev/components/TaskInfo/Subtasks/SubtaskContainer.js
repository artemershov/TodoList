import React from 'react';
import SimpleForm from '../../shared/SimpleForm.js';
import SubtaskItem from './SubtaskItem.js';

export default class SubtaskList extends React.Component {
  state = { formOpen: false };

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });

  handleSubmit = value => {
    if (this.props.data.title !== value) {
      this.props.actions.edit(this.props.id, this.props.data.id, value);
    }
    this.formToggle();
  };

  render = () =>
    this.state.formOpen ? (
      <SimpleForm submit={this.handleSubmit} value={this.props.data.title} />
    ) : (
      <SubtaskItem
        id={this.props.id}
        data={this.props.data}
        actions={{
          edit: this.formToggle,
          check: this.props.actions.check,
          remove: this.props.actions.remove,
        }}
      />
    );
}