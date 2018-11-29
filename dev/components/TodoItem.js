import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faEdit,
  faTrashAlt,
  faSquare,
} from '@fortawesome/free-regular-svg-icons';

const leadZero = num => (num.toString().length == 1 ? '0' + num : num);
const formatDate = date => {
  date = new Date(date);
  const hour = leadZero(date.getHours());
  const mins = leadZero(date.getMinutes());
  const day = leadZero(date.getDate());
  const month = leadZero(date.getMonth());
  const year = date.getFullYear();
  return day + '.' + month + '.' + year + ' ' + hour + ':' + mins;
};

export default class TodoItem extends React.Component {
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
    <table className="w-100" cellPadding="0">
      <tbody>
        <tr>
          <td>
            <Button size="sm" color="link" onClick={this.checkDone}>
              <FontAwesomeIcon
                className="lead"
                icon={this.props.data.done ? faCheckSquare : faSquare}
              />
            </Button>
          </td>
          <td className="px-2 w-100" style={{ lineHeight: 1.2 }}>
            <div className="font-weight-bold">{this.props.data.title}</div>
            <div className="text-muted small d-none d-sm-block">
              {this.props.data.done
                ? `Завершено: ${formatDate(this.props.data.doneDate)}`
                : `Добавлено: ${formatDate(this.props.data.addDate)}`}
            </div>
          </td>
          <td>
            <ButtonGroup>
              <Button size="sm" color="light" onClick={this.props.edit}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button size="sm" color="light" onClick={this.remove}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
