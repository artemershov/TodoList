import defaultSettings from './param/defaultSettings';

export default class ListSettings {
  constructor(settings = null) {
    this.setData(settings || defaultSettings);
  }

  getFilter() {
    return this.filter;
  }

  getSort() {
    return this.sort;
  }

  getReverse() {
    return this.reverse;
  }

  getData() {
    return {
      group: this.group,
      filter: this.filter,
      sort: this.sort,
      reverse: this.reverse,
    };
  }

  setFilter(data) {
    this.filter = data;
  }

  setSort(data) {
    this.sort = data;
  }

  setReverse(data) {
    this.reverse = data;
  }

  setData({ filter, sort, reverse } = defaultSettings) {
    this.filter = filter;
    this.sort = sort;
    this.reverse = reverse;
  }
}
