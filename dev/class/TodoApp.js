import TaskList from './Task/TaskList';
import GroupList from './Group/GroupList';
import ListSettings from './Settings/ListSettings';
import Styles from './Settings/Styles';
import filterParam from './Settings/param/filterParam';
import sortParam from './Settings/param/sortParam';
import WebStorageClass from './Storage/WebStorage';
import difference from 'lodash/difference';
import intersection from 'lodash/intersection';
import omit from 'lodash/omit';
import pullAll from 'lodash/pullAll';
import some from 'lodash/some';

export default class TodoApp {
  constructor() {
    this.tasks = new TaskList();
    this.groups = new GroupList();
    this.settings = new ListSettings();
    this.styles = new Styles();
    try {
      this.storage = new WebStorageClass('TodoList');
    } catch (e) {
      this.storage = null;
    }
    this.cache = {};
    if (this.storage && this.storage.get()) this.setData(this.storage.get());
    if (!this.groups.order.length) this.groupsActions('add', 'TodoList');
  }

  tasksActions(method, groupId, ...args) {
    const result = this.tasks[method](...args);
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
        const list = omit(this.tasks.getList(), groupList);
        const order = difference(this.tasks.getOrder(), groupList);
        this.tasks.setData({ list, order });
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

  stylesActions(method, ...args) {
    this.styles[method](...args);
    this.styles.updateStyle();
    this.updateStorage();
  }

  searchAction(query) {
    if (query) {
      const regexp = new RegExp(query, 'gi');
      const list = this.tasks
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
    const tasksOrder = this.tasks.getOrder();
    const groupsOrder = this.groups.getOrder();
    const taskList = this.tasks.getList();
    const groupsList = this.groups.getList();
    const groups = groupsOrder.map(groupId => {
      const group = groupsList[groupId];
      const order = intersection(tasksOrder, group.list);
      const list = order.map(i => taskList[i]);
      if (
        !this.cache[groupId] ||
        this.cache[groupId].order.join() !== order.join()
      ) {
        this.cache[groupId] = { order, lastUpdate: Date.now() };
      }
      const lastUpdate = this.cache[groupId].lastUpdate;
      pullAll(tasksOrder, group.list);
      return { ...group, list, lastUpdate };
    });
    if (tasksOrder.length) {
      groups.push({
        id: null,
        title: 'Без группы',
        list: tasksOrder.map(i => taskList[i]),
      });
    }
    return groups;
  }

  getSettings() {
    return this.settings.getData();
  }

  getStyles() {
    return this.styles.getData();
  }

  getData() {
    return {
      tasks: this.tasks.getData(),
      groups: this.groups.getData(),
      settings: this.settings.getData(),
      styles: this.styles.getData(),
    };
  }

  setData({ tasks = null, groups = null, settings = null, styles = null }) {
    this.tasks.setData(tasks);
    this.groups.setData(groups);
    this.settings.setData(settings);
    this.styles.setData(styles);
  }

  updateOrder() {
    const settings = this.settings.getData();
    this.tasks.updateOrder({
      filter: filterParam[settings.filter].param,
      sort: sortParam[settings.sort].param,
      reverse: settings.reverse,
    });
  }

  updateStorage() {
    if (this.storage) this.storage.set(this.getData());
  }
}
