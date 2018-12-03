import Todo from './Todo.js';
import { compact, filter, max, merge, pullAll, sortBy } from 'lodash';

export default class TodoList {
  constructor() {
    this.list = {};
    this.order = [];
  }

  getList() {
    return this.order.map(i => i && this.list[i]);
  }

  getOrder() {
    return this.order;
  }

  getData() {
    return {
      list: this.list,
      order: this.order,
    };
  }

  setList(data) {
    this.list = data;
  }

  setOrder(data) {
    this.order = data;
  }

  setData(data) {
    this.list = data.list;
    this.order = data.order;
  }

  add(data) {
    const id = this.order.length ? max(this.order) + 1 : 1;
    const task = new Todo(data, id);
    this.list[id] = task;
    this.order.unshift(id);
    return task;
  }

  edit(id, data) {
    return merge(this.list[id], {
      title: data.title,
      priority: data.priority,
      date: {
        deadline: data.deadline,
      },
    });
  }

  check(id) {
    const task = this.list[id];
    return merge(task, {
      done: !task.done,
      date: {
        done: task.done ? null : Date.now(),
      },
    });
  }

  remove(id) {
    this.list[id] = undefined;
    pullAll(this.order, [id]);
    return 1;
  }

  removeDone() {
    const ids = filter(this.list, i => i && i.done).map(i => i.id);
    ids.map(i => (this.list[i] = undefined));
    pullAll(this.order, ids);
    return ids.length;
  }

  sort(key, reverse = false) {
    this.order = compact(sortBy(this.list, key).map(i => i && i.id));
    if (reverse) this.order.reverse();
    return this.order;
  }
}
