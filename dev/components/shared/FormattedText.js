import React, { Fragment } from 'react';

const link = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
);

const FormattedText = props => {
  const makeLinks = text =>
    text.split(/\s+/).map((el, idx) => (
      <Fragment key={idx}>
        {link.test(el) ? (
          <a href={el} target="_blank" rel="noopener noreferrer">
            {el}
          </a>
        ) : (
          el
        )}{' '}
      </Fragment>
    ));
  const makeParagraphs = text =>
    text
      .split(/\n\r?/)
      .map((el, idx) =>
        el ? <div key={idx}>{makeLinks(el)}</div> : <br key={idx} />
      );

  return makeParagraphs(String(props.text));
};

export default FormattedText;
