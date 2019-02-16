const sortParam = {
  list: [0, 1, 2],
  reverse: {
    title: 'В обратном порядке',
    param: false,
  },
  '0': {
    title: 'По дедлайну',
    param: [
      ['done', 'date.deadline', 'date.done', 'date.add'],
      ['asc', 'asc', 'desc', 'desc'],
    ],
  },
  '1': {
    title: 'По дате создания',
    param: [['date.add'], ['desc']],
  },
  '2': {
    title: 'По приоритету',
    param: [
      ['priority', 'done', 'date.deadline', 'date.done', 'date.add'],
      ['desc', 'asc', 'asc', 'desc', 'desc'],
    ],
  },
};

export default sortParam;
