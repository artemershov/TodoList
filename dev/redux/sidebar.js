const actions = {
  groups: 'SIDEBAR_SHOW_GROUPS',
  settings: 'SIDEBAR_SHOW_SETTINGS',
  profile: 'SIDEBAR_SHOW_PROFILE',
  hide: 'SIDEBAR_HIDE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.groups:
      return {
        isOpen: true,
        content: 'groups',
      };
    case actions.settings:
      return {
        isOpen: true,
        content: 'settings',
      };
    case actions.profile:
      return {
        isOpen: true,
        content: 'profile',
      };
    case actions.hide:
      return {
        isOpen: false,
        content: null,
      };
    default:
      return (
        state || {
          isOpen: false,
          content: null,
        }
      );
  }
};

export default reducer;
