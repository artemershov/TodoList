import { TodoApp } from './index';

const actions = {
  setFilter: 'SETTINGS_SET_FILTER',
  setSort: 'SETTINGS_SET_SORT',
  setReverse: 'SETTINGS_SET_REVERSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFilter:
      TodoApp.settingsActions('setFilter', action.data);
      break;
    case actions.setSort:
      TodoApp.settingsActions('setSort', action.data);
      break;
    case actions.setReverse:
      TodoApp.settingsActions('setReverse', action.data);
      break;
  }
  return TodoApp.getSettings();
};

export default reducer;
