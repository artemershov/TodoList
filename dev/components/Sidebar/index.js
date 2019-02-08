import React from 'react';
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
          content: (
            <Groups
              groups={props.groups}
              actions={props.groupsActions}
            />
          ),
        };
      case 'settings':
        return {
          title: 'Настройки',
          content: (
            <Settings
              settings={props.settings}
              settingsActions={props.settingsActions}
              styles={props.styles}
              stylesActions={props.stylesActions}
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
  })(props.content);
  return (
    <Sidebar
      isOpen={props.isOpen}
      toggle={props.toggle}
      title={sidebar.title}>
      {sidebar.content}
    </Sidebar>
  );
};

export default SidebarContainer;
