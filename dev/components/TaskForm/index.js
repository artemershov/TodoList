import React from 'react';
import TaskFormDate from './TaskFormDate';
import TaskFormPriorities from './TaskFormPriorities';
import { Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

export default class TaskForm extends React.Component {
  state = {
    title: '',
    priority: 0,
    deadline: null,
  };
  handleChange = e => {
    const data = e.target.value;
    const prop = e.target.dataset.prop;
    this.setState({ [prop]: data });
  };
  handleDatapicker = date => {
    this.setState({ deadline: date });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { title, priority, deadline } = this.state;
    this.props.submit({
      title,
      priority,
      deadline: deadline ? deadline.getTime() : null,
    });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      title: '',
      priority: 0,
      deadline: null,
    });
  };
  componentDidMount = () => {
    if (this.props.data) {
      const { title, priority } = this.props.data;
      const { deadline } = this.props.data.date;
      this.setState({
        title,
        priority,
        deadline: deadline ? new Date(deadline) : null,
      });
    }
  };
  render = () => (
    <Form onSubmit={this.handleSubmit}>
      <div className="d-flex">
        <div className="flex-fill">
          <Input
            data-prop="title"
            onChange={this.handleChange}
            value={this.state.title}
            maxLength="200"
            required
            placeholder="Название задачи"
          />
        </div>
        <div className="px-2">
          <TaskFormPriorities
            value={this.state.priority}
            onChange={this.handleChange}
          />
        </div>
        <div className="pr-2">
          <TaskFormDate
            date={this.state.deadline}
            onChange={this.handleDatapicker}
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
