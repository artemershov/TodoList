import React, { Fragment } from 'react';
import Header from '../Header';
import TaskGroup from '../TaskGroup';
import Sidebar from '../Sidebar';
import RemoveDoneBtn from '../shared/RemoveDoneBtn';
import Container from 'reactstrap/lib/Container';

export default class Layout extends React.Component {
  state = {
    sidebarIsOpen: false,
    sidebarContent: null,
  };
  hideSidebar = () =>
    this.setState({
      sidebarIsOpen: false,
      sidebarContent: null,
    });
  showSidebar = content =>
    this.setState({
      sidebarIsOpen: true,
      sidebarContent: content,
    });

  removeDone = this.props.todoActions(null)('removeDone');

  render = () => {
    return (
      <Fragment>
        <Header
          actions={{
            showSidebar: this.showSidebar,
            search: this.props.searchAction,
          }}
        />
        <Container className="pt-5">
          <TaskGroup
            todoActions={this.props.todoActions}
            groups={this.props.searchResults || this.props.groups}
          />
          <RemoveDoneBtn
            className="d-block mx-auto mb-4"
            remove={this.removeDone}
          />
        </Container>
        <Sidebar
          isOpen={this.state.sidebarIsOpen}
          toggle={this.hideSidebar}
          content={this.state.sidebarContent}
          groups={this.props.groups}
          groupsActions={this.props.groupsActions}
          settings={this.props.settings}
          settingsActions={this.props.settingsActions}
          styles={this.props.styles}
          stylesActions={this.props.stylesActions}
        />
      </Fragment>
    );
  };
}
