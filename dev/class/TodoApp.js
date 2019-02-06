import TodoList from './TodoList';
import GroupList from './Groups';
import SettingsClass, { filterParam, sortParam } from './Settings';
import WebStorageClass from './WebStorage';
import difference from 'lodash/difference';
import intersection from 'lodash/intersection';
import omit from 'lodash/omit';
import pullAll from 'lodash/pullAll';
import some from 'lodash/some';

export default class TodoApp {
  constructor() {
    this.todo = new TodoList();
    this.groups = new GroupList();
    this.settings = new SettingsClass();
    this.storage = WebStorageClass('TodoList');
    this.cache = {};
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
        const order = this.groups.getOrder();
        const list = this.groups.getList();
        order.map(i => pullAll(list[i].list, result));
        this.groups.setList(list);
        break;
      }
      case 'edit':
      case 'check': {
        this.updateOrder();
        break;
      }
    }
    if (groupId) this.cache[groupId].lastUpdate = Date.now();
    this.updateStorage();
  }

  groupsActions(method, ...args) {
    switch (method) {
      case 'edit': {
        const [id, title] = args;
        this.groups.edit(id, title);
        this.cache[id].lastUpdate = Date.now();
        break;
      }
      case 'remove': {
        const id = args[0];
        const groupList = this.groups.getList()[id].list;
        const list = omit(this.todo.getList(), groupList);
        const order = difference(this.todo.getOrder(), groupList);
        this.todo.setData({ list, order });
        this.groups.remove(id);
        if (!this.groups.order.length) this.groupsActions('add', 'TodoList');
        break;
      }
      default: {
        this.groups[method](...args);
        break;
      }
    }
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
    const todoOrder = this.todo.getOrder();
    const groupsOrder = this.groups.getOrder();
    const taskList = this.todo.getList();
    const groupsList = this.groups.getList();
    const groups = groupsOrder.map(groupId => {
      const group = groupsList[groupId];
      const order = intersection(todoOrder, group.list);
      const list = order.map(i => taskList[i]);
      if (
        !this.cache[groupId] ||
        this.cache[groupId].order.join() !== order.join()
      ) {
        this.cache[groupId] = { order, lastUpdate: Date.now() };
      }
      const lastUpdate = this.cache[groupId].lastUpdate;
      pullAll(todoOrder, group.list);
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
