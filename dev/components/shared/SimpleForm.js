import React from 'react';
import Form from 'reactstrap/lib/Form';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

export default class SimpleForm extends React.Component {
  state = { value: '' };

  handleSubmit = e => {
    e.preventDefault();
    let value = this.state.value.trim();
    if (value) {
      this.props.submit(value);
      value = '';
    }
    this.setState({ value });
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
    <Form className={this.props.className} onSubmit={this.handleSubmit}>
      <div className="d-flex">
        <div className="flex-fill pr-2">
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            maxLength="200"
            required
            placeholder={this.props.placeholder}
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
