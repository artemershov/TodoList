import Todo from './Todo.js';

export default class TodoList {

  list = []

  add(data) {
    const id = this.list.length ? Math.max(...this.list.map(i => i.id)) + 1 : 1;
    const todo = new Todo(data, id);
    this.list.unshift(todo);
    return this.list;
  }

  edit(data) {
    const index = this.list.findIndex(i => i.id == data.id);
    this.list[index] = data;
    return this.list;
  }

  remove(data) {
    const list = this.list.filter(i => i.id !== data.id);
    return this.list = list;
  }

  removeDone() {
    const list = this.list.filter(i => !i.done);
    return this.list = list;
  }

  sort() {
    const listNew = this.list.filter(i => !i.done).sort((a, b) => b.addDate - a.addDate);
    const listDone = this.list.filter(i => i.done).sort((a, b) => b.doneDate - a.doneDate);
    const list = [].concat(listNew, listDone);
    return this.list = list;
  }

}
