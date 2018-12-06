import React from 'react';
import CheckButton from '../../shared/CheckButton';
import ActionsMenu from '../../shared/ActionsMenu';
import WordBreaker from '../../shared/WordBreaker';

export default class SubtaskItem extends React.Component {
  taskCheck = e => {
    const { id } = e.currentTarget.dataset;
    this.props.actions.check(this.props.id, Number(id));
  };

  taskRemove = e => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      const { id } = e.currentTarget.dataset;
      this.props.actions.remove(this.props.id, Number(id));
    }
  };

  render = () => (
    <div className="d-flex align-items-center">
      <div>
        <CheckButton
          onClick={this.taskCheck}
          done={this.props.data.done}
          id={this.props.data.id}
        />
      </div>
      <WordBreaker className="px-2 flex-fill">
        {this.props.data.title}
      </WordBreaker>
      <div>
        <ActionsMenu
          actions={{
            edit: this.props.actions.edit,
            remove: this.taskRemove,
          }}
          id={this.props.data.id}
        />
      </div>
    </div>
  );
}
