const filterParam = {
  list: [0, 1, 2, 3, 4, 5, 6],
  '0': {
    title: 'Без фильтра',
    param: el => el && el,
  },
  '1': {
    title: 'Выполненные',
    param: el => el && el.done,
  },
  '2': {
    title: 'Не выполненные',
    param: el => el && !el.done,
  },
  '3': {
    title: 'С приоритетом',
    param: el => el && el.priority,
  },
  '4': {
    title: 'Без приоритета',
    param: el => el && !el.priority,
  },
  '5': {
    title: 'С дедлайном',
    param: el => el && el.date.deadline,
  },
  '6': {
    title: 'Без дедлайна',
    param: el => el && !el.date.deadline,
  },
};

export default filterParam;
