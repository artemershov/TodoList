import React from 'react';
import { Button } from 'reactstrap';

export default class RemoveDoneBtn extends React.Component {
  removeDone = () => {
    if (confirm('Удалить все завершенные задачи?')) {
      this.props.actions.removeDone();
    }
  };
  render = () => (
    <Button outline color="light" onClick={this.removeDone}>
      <i className="icon-trash-empty" /> Удалить завершенные задачи
    </Button>
  );
}
