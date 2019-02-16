import { TodoApp } from './index';
import * as tasks from './tasks';
import * as groups from './groups';

const actions = {
  update: 'UPDATE',
};

const reducer = (state, action) => {
  if (tasks.actions.includes(action.type)) {
    return tasks.reducer(state, action);
  }
  if (Object.values(groups.actions).includes(action.type)) {
    return groups.reducer(state, action);
  }
  if (action.type == actions.update) return TodoApp.getGroups();
  return TodoApp.getGroups();
};

export default reducer;
