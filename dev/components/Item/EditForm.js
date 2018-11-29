import React from 'react';
import { Form, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class EditForm extends React.Component {
  state = {
    data: this.props.data.title,
  };
  change = e => {
    const data = e.target.value;
    this.setState({ data });
  };
  submit = e => {
    e.preventDefault();
    if (this.props.data.title !== this.state.data) {
      const todo = { ...this.props.data, title: this.state.data };
      this.props.submit(todo);
    }
    this.props.cancel();
  };
  render = () => (
    <Form className="px-2" onSubmit={this.submit}>
      <InputGroup>
        <Input
          onChange={this.change}
          value={this.state.data}
          maxLength="200"
          required
          placeholder="Название задачи"
        />
        <InputGroupAddon addonType="append">
          <Button outline color="secondary">
            <FontAwesomeIcon icon={faCheck} />
          </Button>
          <Button outline color="secondary" onClick={this.props.cancel}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}
