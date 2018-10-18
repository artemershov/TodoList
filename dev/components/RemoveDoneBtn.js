import React from 'react';

export default class RemoveDoneBtn extends React.Component {
  removeDone = () => {
    if (confirm('Удалить все завершенные задачи?')) {
      this.props.actions.removeDone();
    }
  }
  render = () => pug`
    button.btn.btn-outline-light(type="button", onClick=this.removeDone)
      i.icon-trash-empty
      |  Удалить завершенные задачи
  `;
}
