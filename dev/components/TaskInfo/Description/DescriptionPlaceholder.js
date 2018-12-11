import React from 'react';
import Button from 'reactstrap/lib/Button';

const DescriptionPlaceholder = props => (
  <div className="py-3 text-center">
    <h4 className="mb-3">У задачи пока нет описания</h4>
    <Button outline color="secondary" onClick={props.action}>
      Добавить
    </Button>
  </div>
);

export default DescriptionPlaceholder;
