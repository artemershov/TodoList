import React, { Fragment } from 'react';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1041;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transition: right 0.2s;
  &.isOpen {
    right: 0;
  }
  &.isClose {
    right: -100%;
  }
  @media (min-width: 576px) {
    width: 30%;
    min-width: 320px;
  }
`;

const Sidebar = props => {
  props.isOpen
    ? document.body.classList.add('modal-open')
    : document.body.classList.remove('modal-open');
  return (
    <Fragment>
      <SidebarContainer
        className={
          'bg-white shadow p-3 ' + (props.isOpen ? 'isOpen' : 'isClose')
        }>
        <div className="d-flex pb-2 mb-4 border-bottom">
          <h4 className="flex-fill m-0 text-truncated">{props.title}</h4>
          <div>
            <Button color="link" onClick={props.toggle}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        </div>
        {props.isOpen && props.children}
      </SidebarContainer>
      {props.isOpen && (
        <div className="modal-backdrop fade show" onClick={props.toggle} />
      )}
    </Fragment>
  );
};

export default Sidebar;
