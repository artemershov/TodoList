import React from 'react';
import CollapseBS from 'reactstrap/lib/Collapse';

export default class Collapse extends React.Component {
  state = { childrenShow: false };

  collapseOnOpen = () => this.setState({ childrenShow: true });
  collapseOnClose = () => this.setState({ childrenShow: false });

  render = () => (
    <CollapseBS
      isOpen={this.props.isOpen}
      onEntering={this.collapseOnOpen}
      onExited={this.collapseOnClose}>
      {(this.props.isOpen || this.state.childrenShow) && this.props.children}
    </CollapseBS>
  );
}
