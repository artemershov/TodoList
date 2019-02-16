import SimpleList from './SimpleList';
import add from './methods/add';
import remove from './methods/remove';

export default class List extends SimpleList {
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
    this.setData(add(this, data));
    return this.getLastId();
  }

  remove(id) {
    this.setData(remove(this, id));
    return id;
  }
}
