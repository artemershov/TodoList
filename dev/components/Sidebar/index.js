import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Groups from './Groups';
import Settings from './Settings';
import Profile from './Profile';

const SidebarContainer = props => {
  const sidebar = (contentType => {
    switch (contentType) {
      case 'groups':
        return {
          title: 'Редактор групп',
          content: <Groups />,
        };
      case 'settings':
        return {
          title: 'Настройки',
          content: <Settings />,
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
  })(props.content);
  return (
    <Sidebar
      isOpen={props.isOpen}
      toggle={props.hideSidebar}
      title={sidebar.title}>
      {sidebar.content}
    </Sidebar>
  );
};

const mapState = state => state.sidebar;
const mapDispatch = dispatch => ({
  hideSidebar: () => dispatch({ type: 'SIDEBAR_HIDE' }),
});
export default connect(
  mapState,
  mapDispatch
)(SidebarContainer);
