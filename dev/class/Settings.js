const defaultSettings = {
  filter: 0,
  sort: 0,
  reverse: false,
};

export default class Settings {
  constructor(settings = null) {
    this.setData(settings || defaultSettings);
  }

  getFilter() {
    return this.filter;
  }

  getSort() {
    return this.sort;
  }

  getReverse() {
    return this.reverse;
  }

  getData() {
    return {
      group: this.group,
      filter: this.filter,
      sort: this.sort,
      reverse: this.reverse,
    };
  }

  setFilter(data) {
    this.filter = data;
  }

  setSort(data) {
    this.sort = data;
  }

  setReverse(data) {
    this.reverse = data;
  }

  setData(data) {
    this.filter = data.filter;
    this.sort = data.sort;
    this.reverse = data.reverse;
  }
}

const sorting = {
  list: [0, 1, 2, 3],
  reverse: {
    title: 'В обратном порядке',
    param: false,
  },
  '0': {
    title: 'По статусу',
    param: [['date.done', 'date.add', 'done'], ['desc', 'desc', 'asc']],
  },
  '1': {
    title: 'По дате создания',
    param: [['date.add'], ['desc']],
  },
  '2': {
    title: 'По приоритету',
    param: [
      ['priority', 'date.done', 'date.add', 'done'],
      ['desc', 'desc', 'desc', 'asc'],
    ],
  },
  '3': {
    title: 'По дедлайну',
    param: [
      ['date.deadline', 'date.done', 'date.add', 'done'],
      ['asc', 'desc', 'desc', 'asc'],
    ],
  },
};

const filtering = {
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

export { defaultSettings, sorting, filtering };
