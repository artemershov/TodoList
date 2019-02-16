import React from 'react';
import { connect } from 'react-redux';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';

class RemoveDoneBtn extends React.Component {
  removeDone = () => {
    if (confirm('Удалить все завершенные задачи?')) {
      this.props.dispatch({ type: 'TASK_REMOVE_DONE' });
    }
  };
  render = () => (
    <Button
      className={this.props.className}
      outline
      color="light"
      onClick={this.removeDone}>
      <FontAwesomeIcon icon={faTrashAlt} /> Удалить завершенные задачи
    </Button>
  );
}

export default connect()(RemoveDoneBtn);
