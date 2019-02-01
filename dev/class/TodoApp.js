import TodoList from './TodoList';
import GroupList from './Groups';
import SettingsClass, { filterParam, sortParam } from './Settings';
import WebStorageClass from './WebStorage';
import some from 'lodash/some';
import pullAll from 'lodash/pullAll';

export default class TodoApp {
  constructor() {
    this.todo = new TodoList();
    this.groups = new GroupList();
    this.settings = new SettingsClass();
    this.storage = WebStorageClass('TodoList');
    if (this.storage) {
      const data = this.storage.get();
      this.todo.setData(data.todo || null);
      this.groups.setData(data.groups || null);
      this.settings.setData(data.settings || null);
    }
  }

  todoActions(method, ...args) {
    this.todo[method](...args);
    const methodsToUpdate = ['add', 'edit', 'check', 'remove', 'removeDone'];
    if (methodsToUpdate.includes(method)) this.updateOrder();
    this.updateStorage();
  }

  groupsActions(method, ...args) {
    this.groups[method](...args);
    this.updateStorage();
  }

  settingsActions(method, ...args) {
    this.settings[method](...args);
    this.updateOrder();
    this.updateStorage();
  }

  searchAction(query) {
    let groups;
    if (query) {
      const regexp = new RegExp(query, 'gi');
      const todo = this.todo
        .getOrderedList()
        .filter(
          task =>
            regexp.test(task.title) ||
            regexp.test(task.description) ||
            some(task.subtasks.list, el => regexp.test(el.title)) ||
            some(task.comments.list, el => regexp.test(el.message))
        );
      groups = [
        {
          title: `Поиск: ${query}`,
          list: todo,
        },
      ];
    } else {
      groups = this.getGroups();
    }
    return groups;
  }

  getGroups() {
    const taskList = this.todo.getList();
    const taskOrder = this.todo.getOrder();
    const groups = this.groups.getOrderedList().map(group => {
      const groupList = group.list;
      group.list = taskOrder
        .filter(i => groupList.includes(i))
        .map(taskId => taskList[taskId]);
      pullAll(taskOrder, groupList);
      return group;
    });
    if (taskOrder.length) {
      groups.push({
        title: 'Без группы',
        list: taskOrder.map(i => taskList[i]),
      });
    }
    this.updateStorage();
    return groups;
  }

  getSettings() {
    return this.settings.getData();
  }

  updateOrder() {
    const settings = this.settings.getData();
    this.todo.updateOrder({
      filter: filterParam[settings.filter].param,
      sort: sortParam[settings.sort].param,
      reverse: settings.reverse,
    });
  }

  updateStorage() {
    if (this.storage) {
      this.storage.set({
        todo: this.todo.getData(),
        groups: this.groups.getData(),
        settings: this.settings.getData(),
      });
    }
  }
}
