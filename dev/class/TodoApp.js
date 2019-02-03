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
    this.lastUpdate = {};
    if (this.storage && this.storage.get()) {
      const data = this.storage.get();
      this.todo.setData(data.todo || null);
      this.groups.setData(data.groups || null);
      this.settings.setData(data.settings || null);
    }
    if (!this.groups.order.length) this.groupsActions('add', 'TodoList');
  }

  todoActions(method, groupId, ...args) {
    const result = this.todo[method](...args);
    switch (method) {
      case 'add': {
        if (groupId) this.groups.itemAdd(groupId, result);
        this.updateOrder();
        break;
      }
      case 'remove': {
        if (groupId) this.groups.itemRemove(groupId, ...args);
        break;
      }
      case 'removeDone': {
        const groupOrder = this.groups.getOrder();
        const groupList = this.groups.getList();
        groupOrder.map(i => {
          const group = groupList[i];
          pullAll(group.list, result);
        });
        break;
      }
      case 'edit':
      case 'check': {
        this.updateOrder();
        break;
      }
    }
    this.lastUpdate[groupId] = Date.now();
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
    if (query) {
      const regexp = new RegExp(query, 'gi');
      const list = this.todo
        .getOrderedList()
        .filter(
          task =>
            regexp.test(task.title) ||
            regexp.test(task.description) ||
            some(task.subtasks.list, el => regexp.test(el.title)) ||
            some(task.comments.list, el => regexp.test(el.message))
        );
      return [
        {
          id: null,
          title: `Поиск: ${query}`,
          list,
        },
      ];
    }
    return this.getGroups();
  }

  getGroups() {
    const todoOrder = [...this.todo.getOrder()];
    const groupsOrder = this.groups.getOrder();
    const taskList = this.todo.getList();
    const groupsList = this.groups.getList();
    const groups = groupsOrder.map(groupId => {
      const group = groupsList[groupId];
      const list = todoOrder
        .filter(taskId => group.list.includes(taskId))
        .map(taskId => taskList[taskId]);
      pullAll(todoOrder, group.list);
      if (!this.lastUpdate[group.id]) this.lastUpdate[group.id] = Date.now();
      const lastUpdate = this.lastUpdate[group.id];
      return { ...group, list, lastUpdate };
    });
    if (todoOrder.length) {
      groups.push({
        id: null,
        title: 'Без группы',
        list: todoOrder.map(i => taskList[i]),
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
    Object.keys(this.lastUpdate).map(key => this.lastUpdate[key] = Date.now());
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
