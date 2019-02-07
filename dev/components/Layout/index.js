import React, { Fragment } from 'react';
import Header from '../Header';
import TaskGroup from '../TaskGroup';
import Sidebar from './Sidebar';
import Groups from '../Groups';
import Settings from './Settings';
import Profile from './Profile';
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

  onEscape = e => e.key == 'Escape' && this.hideSidebar();
  componentDidMount = () => {
    document.body.addEventListener('keyup', this.onEscape);
  };
  componentWillUnmount = () => {
    document.body.removeEventListener('keyup', this.onEscape);
  };

  render = () => {
    const sidebar = (contentType => {
      switch (contentType) {
        case 'groups':
          return {
            title: 'Редактор групп',
            content: (
              <Groups
                groups={this.props.groups}
                actions={this.props.groupsActions}
              />
            ),
          };
        case 'settings':
          return {
            title: 'Настройки',
            content: (
              <Settings
                settings={this.props.settings}
                actions={this.props.settingsActions}
              />
            ),
          };
        case 'profile':
          return {
            title: 'Аккаунт',
            content: <Profile />,
          };
        default:
          return {
            title: null,
            content: null,
          };
      }
    })(this.state.sidebarContent);
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
            groups={this.props.groups}
            groupsActions={this.props.groupsActions}
          />
          <RemoveDoneBtn
            className="d-block mx-auto mb-4"
            remove={this.removeDone}
          />
        </Container>
        <Sidebar
          isOpen={this.state.sidebarIsOpen}
          toggle={this.hideSidebar}
          title={sidebar.title}>
          {sidebar.content}
        </Sidebar>
      </Fragment>
    );
  };
}
