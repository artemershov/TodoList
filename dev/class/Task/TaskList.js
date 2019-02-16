import Task from './Task';
import SimpleTask from './SimpleTask';
import History from './records/History';
import Comment from './records/Comment';
import ExtendedList from '../List/ExtendedList';
import add from '../List/methods/add';
import remove from '../List/methods/remove';
import sort from '../List/methods/sort';
import sortParam from '../Settings/param/sortParam';
import difference from 'lodash/difference';
import filter from 'lodash/filter';
import omit from 'lodash/omit';

export default class TaskList extends ExtendedList {
  constructor(data) {
    super(data);
  }

  add(data) {
    const task = new Task(this.lastId + 1, data);
    return super.add(task);
  }

  edit(id, { title, priority = 0, deadline = null }) {
    const task = this.list[id];
    const date = { ...task.date, deadline: deadline };
    const history = add(task.history, new History(task.history.lastId + 1, 1));
    this.setList({
      ...this.list,
      [id]: { ...task, title, priority, date, history },
    });
    return id;
  }

  check(id) {
    const task = this.list[id];
    const date = { ...task.date, done: task.done ? null : Date.now() };
    const history = add(
      task.history,
      new History(task.history.lastId + 1, task.done ? 3 : 2)
    );
    this.setList({
      ...this.list,
      [id]: { ...task, done: !task.done, date, history },
    });
    return id;
  }

  removeDone() {
    const ids = filter(this.list, i => i.done).map(i => i.id);
    const list = omit(this.list, ids);
    const order = difference(this.order, ids);
    this.setData({ list, order });
    return ids;
  }

  editDescription(id, description) {
    const task = this.list[id];
    const history = add(task.history, new History(task.history.lastId + 1, 10));
    this.setList({ ...this.list, [id]: { ...task, description, history } });
    return id;
  }

  commentAdd(taskId, message) {
    const task = this.list[taskId];
    const comments = add(
      task.comments,
      new Comment(task.comments.lastId + 1, message)
    );
    this.setList({ ...this.list, [taskId]: { ...task, comments } });
    return task.comments.lastId + 1;
  }

  commentEdit(taskId, id, message) {
    const task = this.list[taskId];
    const comments = { ...task.comments };
    comments.list[id].message = message;
    this.setList({ ...this.list, [taskId]: { ...task, comments } });
    return id;
  }

  commentRemove(taskId, id) {
    const task = this.list[taskId];
    const comments = remove(task.comments, id);
    this.setList({ ...this.list, [taskId]: { ...task, comments } });
    return id;
  }

  subtaskAdd(taskId, title) {
    const task = this.list[taskId];
    const history = add(task.history, new History(task.history.lastId + 1, 5));
    const subtasks = add(
      task.subtasks,
      new SimpleTask(task.subtasks.lastId + 1, title)
    );
    subtasks.order = sort(subtasks, sortParam['0'].param).order;
    this.setList({ ...this.list, [taskId]: { ...task, history, subtasks } });
    return task.subtasks.lastId + 1;
  }

  subtaskEdit(taskId, id, title) {
    const task = this.list[taskId];
    const history = add(task.history, new History(task.history.lastId + 1, 6));
    const subtasks = { ...task.subtasks };
    subtasks.list[id].title = title;
    this.setList({ ...this.list, [taskId]: { ...task, history, subtasks } });
    return id;
  }

  subtaskCheck(taskId, id) {
    const task = this.list[taskId];
    const subtasks = { ...task.subtasks };
    const subtask = subtasks.list[id];
    subtask.done = !subtask.done;
    subtask.date.done = subtask.done ? Date.now() : null;
    subtasks.order = sort(subtasks, sortParam['0'].param).order;
    const history = add(
      task.history,
      new History(task.history.lastId + 1, subtask.done ? 7 : 8)
    );
    this.setList({ ...this.list, [taskId]: { ...task, history, subtasks } });
    return id;
  }

  subtaskRemove(taskId, id) {
    const task = this.list[taskId];
    const history = add(task.history, new History(task.history.lastId + 1, 9));
    const subtasks = remove(task.subtasks, id);
    this.setList({ ...this.list, [taskId]: { ...task, history, subtasks } });
    return id;
  }
}
