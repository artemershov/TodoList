import { pull } from 'lodash';

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
    listAdd(this, data);
  }

  remove(id) {
    listRemove(this, id);
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

export { SimpleList, ExtendedList, listAdd, listRemove };
