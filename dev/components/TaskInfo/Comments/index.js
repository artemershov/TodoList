import React, { Fragment } from 'react';
import SimpleForm from '../../shared/SimpleForm';
import Comment from './Comment';
import Placeholder from '../../shared/Placeholder';

export default class Comments extends React.Component {
  handleSubmit = value => {
    this.props.actions.add(this.props.id, value);
  };

  commentRemove = e => {
    if (confirm('Вы точно хотите удалить данный комментарий?')) {
      const { id } = e.currentTarget.dataset;
      this.props.actions.remove(this.props.id, Number(id));
    }
  };

  render = () => (
    <Fragment>
      <div className="mb-3">
        <SimpleForm
          submit={this.handleSubmit}
          placeholder="Текст комментария"
        />
      </div>
      {this.props.data.order.length ? (
        this.props.data.order.map(i => (
          <Comment
            data={this.props.data.list[i]}
            remove={this.commentRemove}
            key={i}
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
