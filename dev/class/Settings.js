const defaultSettings = {
  group: 0,
  filter: 0,
  sort: 0,
  reverse: false,
};

export default class Settings {
  constructor(settings = null) {
    this.setData(settings || defaultSettings);
  }

  getGroup() {
    return this.group;
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

  setGroup(data) {
    this.group = data;
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
    this.group = data.group;
    this.filter = data.filter;
    this.sort = data.sort;
    this.reverse = data.reverse;
  }
}

const grouping = {
  list: [0, 1, 2, 3],
  '0': {
    title: 'По проектам',
    param: '',
  },
  '1': {
    title: 'По приоритетам',
    param: '',
  },
  '2': {
    title: 'По дедлайну',
    param: '',
  },
  '3': {
    title: 'По статусу',
    param: '',
  },
};

const sorting = {
  list: [0, 1, 2, 3],
  reverse: {
    title: 'В обратном порядке',
    param: false,
  },
  '0': {
    title: 'По статусу',
    param: ['date.add', 'date.done', 'done'],
  },
  '1': {
    title: 'По дате создания',
    param: ['date.add'],
  },
  '2': {
    title: 'По приоритету',
    param: ['priority', 'date.add', 'done'],
  },
  '3': {
    title: 'По дедлайну',
    param: ['date.deadline', 'done'],
  },
};

const filtering = {
  list: [0, 1, 2, 3, 4, 5, 6],
  '0': {
    title: 'Без фильтра',
    param: '',
  },
  '1': {
    title: 'Выполненные',
    param: '',
  },
  '2': {
    title: 'Не выполненные',
    param: '',
  },
  '3': {
    title: 'С приоритетом',
    param: '',
  },
  '4': {
    title: 'Без приоритета',
    param: '',
  },
  '5': {
    title: 'С дедлайном',
    param: '',
  },
  '6': {
    title: 'Без дедлайна',
    param: '',
  },
};

export { defaultSettings, grouping, sorting, filtering };
