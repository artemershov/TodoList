import { TodoApp } from './index';

const tasksActions = {
  add: 'TASK_ADD',
  edit: 'TASK_EDIT',
  check: 'TASK_CHECK',
  remove: 'TASK_REMOVE',
  removeDone: 'TASK_REMOVE_DONE',
  editDescription: 'TASK_EDIT_DESCRIPTION',
};
const commentsActions = {
  add: 'COMMENT_ADD',
  edit: 'COMMENT_EDIT',
  remove: 'COMMENT_REMOVE',
};
const subtasksActions = {
  add: 'SUBTASK_ADD',
  edit: 'SUBTASK_EDIT',
  check: 'SUBTASK_CHECK',
  remove: 'SUBTASK_REMOVE',
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case tasksActions.add:
      TodoApp.tasksActions('add', action.groupId, action.data);
      break;
    case tasksActions.edit:
      TodoApp.tasksActions('edit', action.groupId, action.taskId, action.data);
      break;
    case tasksActions.check:
      TodoApp.tasksActions('check', action.groupId, action.taskId);
      break;
    case tasksActions.remove:
      TodoApp.tasksActions('remove', action.groupId, action.taskId);
      break;
    case tasksActions.removeDone:
      TodoApp.tasksActions('removeDone', null);
      break;
    case tasksActions.editDescription:
      TodoApp.tasksActions(
        'editDescription',
        action.groupId,
        action.taskId,
        action.data
      );
      break;
  }
  return TodoApp.getGroups();
};
const commentsReducer = (state, action) => {
  switch (action.type) {
    case commentsActions.add:
      TodoApp.tasksActions(
        'commentAdd',
        action.groupId,
        action.taskId,
        action.data
      );
      break;
    case commentsActions.edit:
      TodoApp.tasksActions(
        'commentEdit',
        action.groupId,
        action.taskId,
        action.id,
        action.data
      );
      break;
    case commentsActions.remove:
      TodoApp.tasksActions(
        'commentRemove',
        action.groupId,
        action.taskId,
        action.id
      );
      break;
  }
  return TodoApp.getGroups();
};
const subtasksReducer = (state, action) => {
  switch (action.type) {
    case subtasksActions.add:
      TodoApp.tasksActions(
        'subtaskAdd',
        action.groupId,
        action.taskId,
        action.data
      );
      break;
    case subtasksActions.edit:
      TodoApp.tasksActions(
        'subtaskEdit',
        action.groupId,
        action.taskId,
        action.id,
        action.data
      );
      break;
    case subtasksActions.check:
      TodoApp.tasksActions(
        'subtaskCheck',
        action.groupId,
        action.taskId,
        action.id
      );
      break;
    case subtasksActions.remove:
      TodoApp.tasksActions(
        'subtaskRemove',
        action.groupId,
        action.taskId,
        action.id
      );
      break;
  }
  return TodoApp.getGroups();
};

const reducer = (state, action) => {
  if (Object.values(tasksActions).includes(action.type))
    return tasksReducer(state, action);
  if (Object.values(commentsActions).includes(action.type))
    return commentsReducer(state, action);
  if (Object.values(subtasksActions).includes(action.type))
    return subtasksReducer(state, action);
};
const actions = [
  ...Object.values(tasksActions),
  ...Object.values(commentsActions),
  ...Object.values(subtasksActions),
];

export { reducer, actions };
