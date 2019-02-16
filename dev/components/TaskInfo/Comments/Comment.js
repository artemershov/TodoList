import React from 'react';
import FormattedDate from '../../shared/FormattedDate';
import FormattedText from '../../shared/FormattedText';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

export default class Comment extends React.Component {
  remove = () => {
    if (confirm('Вы точно хотите удалить данный комментарий?')) {
      this.props.remove(this.props.data.id);
    }
  };
  render = () => (
    <div className="px-3 py-2 mb-3 border rounded bg-light">
      <div className="d-flex align-items-center">
        <div className="pr-3 flex-fill">
          <FormattedText text={this.props.data.message} />
          <div className="text-muted small">
            <FormattedDate date={this.props.data.date} />
          </div>
        </div>
        <div>
          <Button close style={{ fontSize: 16 }} onClick={this.remove}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
      </div>
    </div>
  );
}
