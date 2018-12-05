import { SimpleList, listAdd } from './List';

class SimpleTask {
  constructor(id, title) {
    this.id = id;
    this.done = false;
    this.title = title;
  }
}

export default class Task extends SimpleTask {
  constructor(id, { title, priority = 0, deadline = null }) {
    super(id, title);
    this.date = {
      add: Date.now(),
      done: null,
      deadline: deadline,
    };
    this.priority = priority;
    this.description = null;
    this.subtasks = new SimpleList();
    this.comments = new SimpleList();
    this.history = new SimpleList();
    listAdd(this.history, new History(this.history.lastId + 1, 0));
  }
}

class SimpleRecord {
  constructor(id) {
    this.id = id;
    this.date = Date.now();
  }
}

class Comment extends SimpleRecord {
  constructor(id, message) {
    super(id);
    this.message = message;
  }
}

class History extends SimpleRecord {
  constructor(id, event) {
    super(id);
    this.event = event;
  }
}

const taskEventCodes = {
  events: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  '0': 'Задача добавлена',
  '1': 'Задача обновлена',
  '2': 'Задача выполнена',
  '3': 'Задача отмечена как не выполненная',
  '4': 'Задача удалена',
  '5': 'Подзадача добавлена',
  '6': 'Подзадача обновлена',
  '7': 'Подзадача выполнена',
  '8': 'Подзадача отмечена как не выполненная',
  '9': 'Подзадача удалена',
  '10': 'Описание задачи обновлено',
  '11': 'Выполненые задачи удалены',
};

const taskPriorities = {
  levels: [0, 1, 2, 3, 4],
  '0': {
    title: 'Без приоритета',
    color: 'white',
  },
  '1': {
    title: 'Не важно',
    color: 'primary',
  },
  '2': {
    title: 'Не срочно',
    color: 'success',
  },
  '3': {
    title: 'Важно',
    color: 'warning',
  },
  '4': {
    title: 'Срочно',
    color: 'danger',
  },
};

export { Comment, History, Task, taskPriorities, taskEventCodes, SimpleTask };
