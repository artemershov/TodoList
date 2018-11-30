import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { priorities } from '../../class/Todo.js';

export default class AddForm extends React.Component {
  state = {
    title: '',
    priority: 0,
  };
  change = e => {
    const data = e.target.value;
    const prop = e.target.dataset.prop;
    this.setState({ [prop]: data });
  };
  submit = e => {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState({
      title: '',
      priority: 0,
    });
  };
  componentDidMount = () => {
    if (this.props.data) this.setState(this.props.data);
  };
  render = () => (
    <Form onSubmit={this.submit}>
      <div className="d-flex">
        <div className="flex-fill">
          <Input
            data-prop="title"
            onChange={this.change}
            value={this.state.title}
            maxLength="200"
            required
            placeholder="Название задачи"
          />
        </div>
        <div className="px-2">
          <Input
            type="select"
            data-prop="priority"
            onChange={this.change}
            value={this.state.priority}>
            {priorities.map((el, idx) => (
              <option key={idx} value={idx}>
                {el.title}
              </option>
            ))}
          </Input>
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
