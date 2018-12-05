import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

export default class SimpleForm extends React.Component {
  state = { value: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  componentDidMount = () => {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  };

  render = () => (
    <Form onSubmit={this.handleSubmit}>
      <div className="d-flex">
        <div className="flex-fill pr-2">
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <Button outline color="secondary">
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </div>
      </div>
    </Form>
  );
}
