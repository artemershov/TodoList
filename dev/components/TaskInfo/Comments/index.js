import React, { Fragment } from 'react';
import SimpleForm from '../../shared/SimpleForm';
import Comment from './Comment';
import Placeholder from '../../shared/Placeholder';

export default class Comments extends React.Component {
  handleSubmit = value => this.props.actions.add(value);
  render = () => (
    <Fragment>
      <SimpleForm
        className="mb-3"
        submit={this.handleSubmit}
        placeholder="Текст комментария"
      />
      {this.props.data.order.length ? (
        this.props.data.order.map(i => (
          <Comment
            key={i}
            data={this.props.data.list[i]}
            remove={this.props.actions.remove}
          />
        ))
      ) : (
        <Placeholder
          title="Нет коментариев"
          description="Добавьте коментарий используя форму выше"
        />
      )}
    </Fragment>
  );
}
