import React from 'react';
import CheckButton from './CheckButton.js';
import RelativeDate from './RelativeDate.js';
import ActionsMenu from './ActionsMenu.js';
import Priority from './Priority.js';

export default class Task extends React.Component {
  checkDone = () => {
    this.props.data.done = !this.props.data.done;
    this.props.data.doneDate = new Date().getTime();
    this.props.actions.edit(this.props.data);
  };
  remove = () => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      this.props.actions.remove(this.props.data);
    }
  };
  render = () => (
    <div className="d-flex align-items-center">
      <div>
        <CheckButton onClick={this.checkDone} done={this.props.data.done} />
      </div>
      <div className="flex-fill px-2" style={{ lineHeight: 1.2 }}>
        <div className="font-weight-bold">{this.props.data.title}</div>
        <div className="text-muted small d-none d-sm-block">
          {this.props.data.done ? 'Завершено: ' : 'Добавлено: '}
          <RelativeDate
            date={
              this.props.data.done
                ? this.props.data.doneDate
                : this.props.data.addDate
            }
          />
        </div>
      </div>
      {!!+this.props.data.priority && (
        <div className="px-2">
          <Priority level={this.props.data.priority} />
        </div>
      )}
      <div>
        <ActionsMenu
          actions={{
            edit: this.props.edit,
            remove: this.remove,
          }}
        />
      </div>
    </div>
  );
}
