export default class Todo {
  constructor({ title, priority = 0, deadline = null }, id) {
    this.id = id;
    this.done = false;
    this.title = title;
    this.date = {
      add: Date.now(),
      done: null,
      deadline: deadline,
    };
    this.priority = priority;
  }
}

const priorities = [
  {
    title: 'Без приоритета',
    color: 'white',
  },
  {
    title: 'Не важно',
    color: 'primary',
  },
  {
    title: 'Не срочно',
    color: 'success',
  },
  {
    title: 'Важно',
    color: 'warning',
  },
  {
    title: 'Срочно',
    color: 'danger',
  },
];

export { priorities };
