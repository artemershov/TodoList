import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';

const style = {
  fontWeight: 'bold',
  fontSize: '120%',
};

const Logo = () => (
  <a className="btn btn-dark py-1" href="/" style={style}>
    <FontAwesomeIcon className="mr-1" icon={faCheckSquare} /> TodoList
  </a>
);

export default Logo;
