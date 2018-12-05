import React from 'react';

const DescriptionText = props => {
  const text = props.data
    .split(/\n\r?/)
    .map((el, idx) => <div key={idx}>{el}</div>);
  return (
    <div className="px-3 mb-2">
      <div className="mb-2">{text}</div>
      <a href="#" onClick={props.edit}>
        Редактировать
      </a>
    </div>
  );
};

export default DescriptionText;
