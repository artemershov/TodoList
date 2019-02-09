import React from 'react';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import styled from 'styled-components';

const SidebarContainer = styled(Modal)`
  position: absolute
  top: 0;
  right: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  margin: 0;
  @media (min-width: 576px) {
    width: 30%;
    min-width: 320px;
  }
  .modal.show & { transform: translate(0, 0) !important; }
  .modal.fade & { transform: translate(100%, 0); }
  .modal-content {
    position: absolute;
    height: auto;
    min-height: 100%;
    border: none;
    border-radius: 0;
  }
`;

const Sidebar = props => (
  <SidebarContainer isOpen={props.isOpen} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
    <ModalBody>{props.children}</ModalBody>
  </SidebarContainer>
);

export default Sidebar;
