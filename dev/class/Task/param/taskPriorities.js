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

export default taskPriorities;
