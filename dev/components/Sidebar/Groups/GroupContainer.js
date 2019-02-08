import React from 'react';
import SimpleForm from '../../shared/SimpleForm';
import Group from './Group';

export default class GroupContainer extends React.Component {
  state = { formOpen: false };

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  formSubmit = value => {
    if (this.props.data.title !== value) {
      this.props.actions('edit')(this.props.data.id, value);
    }
    this.formToggle();
  };

  removeGroup = () => {
    if (confirm('Вы точно хотите удалить данную группу и все ее задачи?')) {
      this.props.actions('remove')(this.props.data.id);
    }
  };

  render = () =>
    this.state.formOpen ? (
      <SimpleForm
        className="px-2"
        submit={this.formSubmit}
        value={this.props.data.title}
        placeholder="Название группы"
      />
    ) : (
      <Group
        title={this.props.data.title}
        actions={{
          edit: this.formToggle,
          remove: this.removeGroup,
        }}
      />
    );
}
