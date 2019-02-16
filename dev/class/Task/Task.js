import SimpleTask from './SimpleTask';
import SimpleList from '../List/SimpleList';
import add from '../List/methods/add';
import History from './records/History';

export default class Task extends SimpleTask {
  constructor(id, { title, priority = 0, deadline = null }) {
    super(id, title);
    this.priority = priority;
    this.date.deadline = deadline;
    this.description = null;
    this.subtasks = new SimpleList();
    this.comments = new SimpleList();
    this.history = new SimpleList();
    this.history = add(this.history, new History(this.history.lastId + 1, 0));
  }
}
