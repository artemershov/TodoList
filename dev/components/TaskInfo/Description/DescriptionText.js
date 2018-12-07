import React from 'react';
import FormattedText from '../../shared/FormattedText';

const DescriptionText = props => (
  <div className="px-3 mb-2">
    <div className="mb-2">
      <FormattedText text={props.data} />
    </div>
    <a href="#" onClick={props.edit}>
      Редактировать
    </a>
  </div>
);

export default DescriptionText;
