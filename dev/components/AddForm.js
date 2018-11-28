import React from 'react';
import { Form, Input } from 'reactstrap';

export default class AddForm extends React.Component {
  state = {
    data: '',
  };
  change = e => {
    const data = e.target.value;
    this.setState({ data });
  };
  submit = e => {
    e.preventDefault();
    this.props.submit(this.state.data);
    this.setState({ data: '' });
  };
  render = () => (
    <Form onSubmit={this.submit}>
      <Input
        onChange={this.change}
        value={this.state.data}
        maxLength="200"
        required
        placeholder="Название задачи"
      />
    </Form>
  );
}
