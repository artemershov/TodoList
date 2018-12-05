import React from 'react';
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';

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
          maxLength="2000"
        />
      </FormGroup>
      <FormGroup>
        <Row>
          <Col>
            <Button outline color="secondary">
              Сохранить
            </Button>
          </Col>
          <Col>
            <div className="text-right text-muted small">
              {this.state.value.length} / 2000 символов
            </div>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}
