import React, { Fragment } from 'react';
import SimpleForm from '../../shared/SimpleForm';
import SubtaskList from './SubtaskList';
import SubtaskPlaceholder from './SubtaskPlaceholder';

export default class SubTasks extends React.Component {
  handleSubmit = value => {
    this.props.actions.add(this.props.id, value);
  };

  render = () => (
    <Fragment>
      <div className="mb-3">
        <SimpleForm submit={this.handleSubmit} placeholder="Название задачи" />
      </div>
      {this.props.data.order.length ? (
        <SubtaskList
          id={this.props.id}
          data={this.props.data}
          actions={this.props.actions}
        />
      ) : (
        <SubtaskPlaceholder />
      )}
    </Fragment>
  );
}
