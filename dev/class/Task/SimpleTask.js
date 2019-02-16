export default class SimpleTask {
  constructor(id, title) {
    this.id = id;
    this.done = false;
    this.title = title;
    this.date = {
      add: Date.now(),
      done: null,
    };
  }
}
