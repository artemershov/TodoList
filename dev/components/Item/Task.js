import React from 'react';
import CheckButton from './CheckButton.js';
import RelativeDate from './RelativeDate.js';
import ActionsMenu from './ActionsMenu.js';
import Priority from './Priority.js';

export default class Task extends React.Component {
  checkDone = () => {
    this.props.data.done = !this.props.data.done;
    this.props.data.date.done = new Date().getTime();
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
        <div className="text-muted small">
          {this.props.data.date.deadline && (
            <span className="mr-2">
              Дедлайн: <RelativeDate date={this.props.data.date.deadline} />
            </span>
          )}
          {this.props.data.done ? (
            <span className="mr-2">
              Завершено: <RelativeDate date={this.props.data.date.done} />
            </span>
          ) : (
            <span className="mr-2">
              Добавлено: <RelativeDate date={this.props.data.date.add} />
            </span>
          )}
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
