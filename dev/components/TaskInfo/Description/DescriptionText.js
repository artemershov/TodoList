import React from 'react';
import Button from 'reactstrap/lib/Button';
import FormattedText from '../../shared/FormattedText';

const DescriptionText = props => (
  <div className="px-3 mb-2">
    <div className="mb-2">
      <FormattedText text={props.data} />
    </div>
    <Button className="p-0" color="link" onClick={props.edit}>
      Редактировать
    </Button>
  </div>
);

export default DescriptionText;
