import React from 'react';
import DescriptionForm from './DescriptionForm.js';
import DescriptionText from './DescriptionText.js';
import DescriptionPlaceholder from './DescriptionPlaceholder.js';

export default class Description extends React.Component {
  state = { formOpen: false };

  formToggle = (e = null) => {
    if (e) e.preventDefault();
    this.setState({ formOpen: !this.state.formOpen });
  };

  handleSubmit = value => {
    if (this.props.data !== value) {
      this.props.action(this.props.id, value);
    }
    this.formToggle();
  };

  render = () => (
    <div>
      {this.state.formOpen ? (
        <DescriptionForm value={this.props.data} submit={this.handleSubmit} />
      ) : this.props.data ? (
        <DescriptionText data={this.props.data} edit={this.formToggle} />
      ) : (
        <DescriptionPlaceholder action={this.formToggle} />
      )}
    </div>
  );
}
