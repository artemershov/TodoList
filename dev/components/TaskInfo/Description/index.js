import React, { Fragment } from 'react';
import DescriptionForm from './DescriptionForm';
import DescriptionText from './DescriptionText';
import Placeholder from '../../shared/Placeholder';

export default class Description extends React.Component {
  state = { formOpen: false };

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  formSubmit = value => {
    if (this.props.data !== value) this.props.action(value);
    this.formToggle();
  };

  render = () => (
    <Fragment>
      {this.state.formOpen ? (
        <DescriptionForm value={this.props.data} submit={this.formSubmit} />
      ) : this.props.data ? (
        <DescriptionText data={this.props.data} edit={this.formToggle} />
      ) : (
        <Placeholder
          title="Нет описания"
          description="Нажмите на кнопку чтобы показать форму"
          button={{
            action: this.formToggle,
            text: 'Добавить',
          }}
        />
      )}
    </Fragment>
  );
}
