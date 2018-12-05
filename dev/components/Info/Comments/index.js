import React from 'react';
import SimpleForm from '../../shared/SimpleForm.js';
import Comment from './Comment.js';
import CommentPlaceholder from './CommentPlaceholder.js';

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
    <div>
      <div className="mb-3">
        <SimpleForm submit={this.handleSubmit} />
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
        <CommentPlaceholder />
      )}
    </div>
  );
}
