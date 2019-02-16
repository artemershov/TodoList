import { TodoApp } from './index';

const actions = {
  search: 'SEARCH',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.search:
      return action.data ? TodoApp.searchAction(action.data) : [];
    default:
      return [];
  }
};

export default reducer;
