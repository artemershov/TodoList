import Task, { SimpleTask, History, Comment } from './Task';
import { ExtendedList, listAdd, listRemove, listSort } from './List';
import { filter, merge, pullAll } from 'lodash';

export default class TodoList extends ExtendedList {
  constructor() {
    super();
  }

  add(data) {
    const task = new Task(this.lastId + 1, data);
    return super.add(task);
  }

  edit(id, data) {
    const task = this.list[id];
    listAdd(task.history, new History(task.history.lastId + 1, 1));
    return merge(task, {
      title: data.title,
      priority: data.priority,
      date: {
        deadline: data.deadline,
      },
    });
  }

  check(id) {
    const task = this.list[id];
    listAdd(
      task.history,
      new History(task.history.lastId + 1, task.done ? 3 : 2)
    );
    return merge(task, {
      done: !task.done,
      date: {
        done: task.done ? null : Date.now(),
      },
    });
  }

  removeDone() {
    const ids = filter(this.list, i => i && i.done).map(i => i.id);
    ids.map(i => (this.list[i] = undefined));
    pullAll(this.order, ids);
    return ids.length;
  }

  editDescription(id, data) {
    const task = this.list[id];
    task.description = data;
    listAdd(task.history, new History(task.history.lastId + 1, 10));
    return true;
  }

  commentAdd(taskId, message) {
    const task = this.list[taskId];
    return listAdd(
      task.comments,
      new Comment(task.comments.lastId + 1, message)
    );
  }

  commentEdit(taskId, id, message) {
    const task = this.list[taskId];
    task.comments.list[id].message = message;
    return true;
  }

  commentRemove(taskId, id) {
    const task = this.list[taskId];
    return listRemove(task.comments, id);
  }

  subtaskAdd(taskId, title) {
    const task = this.list[taskId];
    listAdd(task.history, new History(task.history.lastId + 1, 5));
    const id = listAdd(
      task.subtasks,
      new SimpleTask(task.subtasks.lastId + 1, title)
    );
    listSort(task.subtasks, ['date.done', 'date.add', 'done'], true);
    return id;
  }

  subtaskEdit(taskId, id, title) {
    const task = this.list[taskId];
    listAdd(task.history, new History(task.history.lastId + 1, 6));
    task.subtasks.list[id].title = title;
    return true;
  }

  subtaskCheck(taskId, id) {
    const task = this.list[taskId];
    const subtask = task.subtasks.list[id];
    merge(subtask, {
      done: !subtask.done,
      date: {
        done: subtask.done ? null : Date.now(),
      },
    });
    listAdd(
      task.history,
      new History(task.history.lastId + 1, subtask.done ? 7 : 8)
    );
    listSort(task.subtasks, ['date.done', 'date.add', 'done'], true);
    return true;
  }

  subtaskRemove(taskId, id) {
    const task = this.list[taskId];
    listAdd(task.history, new History(task.history.lastId + 1, 9));
    return listRemove(task.subtasks, id);
  }
}
