export default class Todo {
  constructor({ title, priority = 0 }, id = null) {
    this.id = id;
    this.done = false;
    this.title = title;
    this.addDate = new Date().getTime();
    this.doneDate = null;
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
