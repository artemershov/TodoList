import compact from 'lodash/compact';
import filter from 'lodash/filter';
import pull from 'lodash/pull';
import orderBy from 'lodash/orderBy';

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
    return this.list;
  }

  getOrder() {
    return this.order;
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
}

export default class ExtendedList extends List {
  constructor(data) {
    super(data);
  }

  getOrderedList() {
    return this.order.map(i => i && this.list[i]);
  }

  setOrderByParams(filterParam, sortParam, reverseParam) {
    const filtered = filter(this.list, filterParam);
    const sorted = orderBy(filtered, ...sortParam);
    if (reverseParam) sorted.reverse();
    this.order = sorted.map(i => i && i.id);
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

const listSort = (list, param, reverse = false) => {
  list.order = compact(orderBy(list.list, ...param).map(i => i && i.id));
  if (reverse) list.order.reverse();
  return list.order;
};

const listFilter = (list, param) => {
  list.order = filter(list.list, param).map(i => i && i.id);
  return list.order;
};

export {
  SimpleList,
  List,
  ExtendedList,
  listAdd,
  listRemove,
  listSort,
  listFilter,
};
