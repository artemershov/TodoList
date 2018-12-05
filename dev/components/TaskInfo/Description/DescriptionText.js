import React from 'react';

const DescriptionText = props => (
  <div className="px-3 mb-2">
    <div className="mb-2">
      {props.data.split(/\n\r?/).map((el, idx) => (
        <p key={idx}>{el}</p>
      ))}
    </div>
    <a href="#" onClick={props.edit}>
      Редактировать
    </a>
  </div>
);

export default DescriptionText;
