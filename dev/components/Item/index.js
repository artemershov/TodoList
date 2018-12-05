import React from 'react';
import Task from './Task.js';
import TaskForm from '../Form';
import Info from '../Info';
import { Collapse } from 'reactstrap';

export default class TodoItem extends React.Component {
  state = {
    infoOpen: false,
    formOpen: false,
  };

  infoToggle = () => this.setState({ infoOpen: !this.state.infoOpen });

  formToggle = () => this.setState({ formOpen: !this.state.formOpen });
  formSubmit = data => {
    this.props.actions.edit(this.props.data.id, data);
    this.formToggle();
  };

  taskCheck = () => {
    this.props.actions.check(this.props.data.id);
  };
  taskRemove = () => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      this.props.actions.remove(this.props.data.id);
    }
  };

  render = () => (
    <div>
      {this.state.formOpen ? (
        <div className="px-2">
          <TaskForm data={this.props.data} submit={this.formSubmit} />
        </div>
      ) : (
        <Task
          data={this.props.data}
          actions={{
            check: this.taskCheck,
            edit: this.formToggle,
            remove: this.taskRemove,
            info: this.infoToggle,
          }}
        />
      )}
      <Collapse isOpen={this.state.infoOpen}>
        <Info
          data={this.props.data}
          actions={{
            description: this.props.actions.editDescription,
            comments: this.props.actions.comments,
            subtasks: this.props.actions.subtasks,
          }}
        />
      </Collapse>
    </div>
  );
}
