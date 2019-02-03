import React, { Fragment } from 'react';
import DescriptionForm from './DescriptionForm';
import DescriptionText from './DescriptionText';
import Placeholder from '../../shared/Placeholder';

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
    <Fragment>
      {this.state.formOpen ? (
        <DescriptionForm value={this.props.data} submit={this.handleSubmit} />
      ) : this.props.data ? (
        <DescriptionText data={this.props.data} edit={this.formToggle} />
      ) : (
        <Placeholder
          title="Нет описания"
          description="Нажмите на кнопку чтобы показать форму"
          button={{
            action: this.formToggle,
            text: 'Добавить'
          }}
        />
      )}
    </Fragment>
  );
}
