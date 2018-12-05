import React, { Fragment } from 'react';

const link = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
);

const FormattedText = props => {
  const makeLinks = text =>
    text.split(' ').map((el, idx) =>
      link.test(el) ? (
        <a href={el} target="_blank" rel="noopener noreferrer" key={idx}>
          {el}{' '}
        </a>
      ) : (
        <Fragment key={idx}>{el} </Fragment>
      )
    );
  const makeParagraphs = text =>
    text
      .split(/\n\r?/)
      .map((el, idx) => (
        <div key={idx}>{el ? makeLinks(el) : <Fragment>&nbsp;</Fragment>}</div>
      ));
  return makeParagraphs(props.text);
};

export default FormattedText;
