import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class DescriptionForm extends React.Component {
  state = { value: '' };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.setState({ value: '' });
  };

  componentDidMount = () => {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  };

  render = () => (
    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Input
          type="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Button outline color="secondary">
          Сохранить
        </Button>
      </FormGroup>
    </Form>
  );
}
