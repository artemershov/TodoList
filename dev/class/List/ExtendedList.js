import List from './List';
import order from './methods/order';

export default class ExtendedList extends List {
  constructor(data) {
    super(data);
  }

  getOrderedList() {
    return this.order.map(i => this.list[i]);
  }

  updateOrder(param) {
    this.setData(order(this, param));
    return this.getOrder();
  }
}
