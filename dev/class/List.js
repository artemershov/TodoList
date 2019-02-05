import filter from 'lodash/filter';
import omit from 'lodash/omit';
import orderBy from 'lodash/orderBy';
import without from 'lodash/without';

class SimpleList {
  constructor() {
    this.list = {};
    this.order = [];
    this.lastId = 0;
  }
}

class List extends SimpleList {
  constructor(data = null) {
    super();
    if (data) this.setData(data);
  }

  getList() {
    return { ...this.list };
  }

  getOrder() {
    return [...this.order];
  }

  getLastId() {
    return this.lastId;
  }

  getData() {
    return {
      list: this.getList(),
      order: this.getOrder(),
      lastId: this.getLastId(),
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

  setData({ list = null, order = null, lastId = null }) {
    if (list) this.list = list;
    if (order) this.order = order;
    if (lastId) this.lastId = lastId;
  }

  add(data) {
    this.setData(listAdd(this, data));
    return this.getLastId();
  }

  remove(id) {
    this.setData(listRemove(this, id));
    return id;
  }
}

export default class ExtendedList extends List {
  constructor(data) {
    super(data);
  }

  getOrderedList() {
    return this.order.map(i => this.list[i]);
  }

  updateOrder(param) {
    this.setData(listUpdateOrder(this, param));
    return this.getOrder();
  }
}

const listAdd = (context, data) => {
  const lastId = context.lastId + 1;
  const list = { ...context.list, [lastId]: data };
  const order = [lastId, ...context.order];
  return { list, order, lastId };
};

const listRemove = (context, id) => {
  const lastId = context.lastId;
  const list = omit(context.list, id);
  const order = without(context.order, id);
  return { list, order, lastId };
};

const listSort = (context, param, reverse = false) => {
  const order = orderBy(context.list, ...param).map(i => i.id);
  if (reverse) order.reverse();
  return { order };
};

const listFilter = (context, param) => {
  const order = filter(context.list, param).map(i => i.id);
  return { order };
};

const listUpdateOrder = (context, param) => {
  let tempList = context.list;
  if (param.filter) tempList = filter(tempList, param.filter);
  if (param.sort) tempList = orderBy(tempList, ...param.sort);
  if (param.reverse) tempList.reverse();
  const order = tempList.map(i => i.id);
  return { order };
};

export {
  SimpleList,
  List,
  ExtendedList,
  listAdd,
  listRemove,
  listSort,
  listFilter,
  listUpdateOrder,
};
