import ExtendedList from './List';
import pull from 'lodash/pull';

class Group {
  constructor(id, title, list = []) {
    this.id = id;
    this.title = title;
    this.list = list;
  }
}

export default class GroupList extends ExtendedList {
  constructor(data) {
    super(data);
  }

  add(title) {
    const group = new Group(this.lastId + 1, title);
    return super.add(group);
  }

  edit(id, title) {
    this.list[id].title = title;
  }

  itemAdd(groupId, id) {
    const group = this.list[groupId];
    group.list.push(id);
    return id;
  }

  itemRemove(groupId, id) {
    const group = this.list[groupId];
    pull(group.list, id);
    return 1;
  }
}

export { Group, GroupList };
