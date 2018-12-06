import { compact, pull, sortBy } from 'lodash';

class SimpleList {
  constructor() {
    this.list = {};
    this.order = [];
    this.lastId = 0;
  }
}

export default class ExtendedList extends SimpleList {
  constructor() {
    super();
  }

  getList() {
    return this.list;
  }

  getOrder() {
    return this.order;
  }

  getOrderedList() {
    return this.order.map(i => i && this.list[i]);
  }

  getLastId() {
    return this.lastId;
  }

  getData() {
    return {
      list: this.list,
      order: this.order,
      lastId: this.lastId,
    };
  }

  setList(data) {
    this.list = data;
  }

  setOrder(data) {
    this.order = data;
  }

  setLastId(id) {
    this.lastId = id;
  }

  setData(data) {
    this.list = data.list;
    this.order = data.order;
    this.lastId = data.lastId;
  }

  add(data) {
    return listAdd(this, data);
  }

  remove(id) {
    return listRemove(this, id);
  }

  sort(key, reverse = false) {
    return listSort(this, key, reverse);
  }
}

const listAdd = (list, data) => {
  list.lastId++;
  list.list[list.lastId] = data;
  list.order.unshift(list.lastId);
  return list.lastId;
};

const listRemove = (list, id) => {
  list.list[id] = undefined;
  pull(list.order, id);
  return 1;
};

const listSort = (list, key, reverse = false) => {
  list.order = compact(sortBy(list.list, key).map(i => i && i.id));
  if (reverse) list.order.reverse();
  return list.order;
};

export { SimpleList, ExtendedList, listAdd, listRemove, listSort };
