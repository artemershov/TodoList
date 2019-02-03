import React from 'react';
import Button from 'reactstrap/lib/Button';

const Placeholder = props => (
  <div className={['text-center', 'p-3', props.className].join(' ')}>
    <h4>{props.title}</h4>
    {props.description && <div className="text-muted">{props.description}</div>}
    {props.button && (
      <Button
        className="mt-3"
        outline
        color="secondary"
        onClick={props.button.action}>
        {props.button.text}
      </Button>
    )}
  </div>
);

export default Placeholder;
