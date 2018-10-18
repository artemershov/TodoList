export default class BrowserStorage {

  constructor(name, session = false) {
    this.name = name;
    this.storage = session ? sessionStorage : localStorage;
    return this;
  }

  get data() {
    const data = this.storage.getItem(this.name);
    return JSON.parse(data);
  }

  get() {
    const data = this.storage.getItem(this.name);
    return JSON.parse(data);
  }

  set data(data) {
    data = JSON.stringify(data);
    return this.storage.setItem(this.name, data);
  }

  set(data) {
    data = JSON.stringify(data);
    return this.storage.setItem(this.name, data);
  }

  remove() {
    return this.storage.removeItem(this.name);
  }

}
