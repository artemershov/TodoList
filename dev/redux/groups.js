import { TodoApp } from './index';

const actions = {
  add: 'GROUP_ADD',
  edit: 'GROUP_EDIT',
  remove: 'GROUP_REMOVE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.add:
      TodoApp.groupsActions('add', action.data);
      break;
    case actions.edit:
      TodoApp.groupsActions('edit', action.id, action.data);
      break;
    case actions.remove:
      TodoApp.groupsActions('remove', action.id);
      break;
  }
  return TodoApp.getGroups();
};

export { reducer, actions };
