export default class Todo {

  constructor(title, id = null) {
    this.id = id;
    this.done = false;
    this.title = title;
    this.addDate = new Date().getTime();
    this.doneDate = null;
  }

}
