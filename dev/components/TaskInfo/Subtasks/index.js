import React, { Fragment } from 'react';
import SimpleForm from '../../shared/SimpleForm';
import SubtaskList from './SubtaskList';
import Placeholder from '../../shared/Placeholder';

export default class SubTasks extends React.Component {
  handleSubmit = value => this.props.actions.add(this.props.id, value);
  render = () => (
    <Fragment>
      <SimpleForm
        className="mb-3"
        submit={this.handleSubmit}
        placeholder="Название задачи"
      />
      {this.props.data.order.length ? (
        <SubtaskList
          id={this.props.id}
          data={this.props.data}
          actions={this.props.actions}
        />
      ) : (
        <Placeholder
          title="Нет задач"
          description="Добавьте задачи используя форму выше"
        />
      )}
    </Fragment>
  );
}
