import ExtendedList from './List';
import without from 'lodash/without';

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
    const group = this.list[id];
    this.setList({ ...this.list, [id]: { ...group, title } });
    return id;
  }

  itemAdd(groupId, id) {
    const group = this.list[groupId];
    const list = [...group.list, id];
    this.setList({ ...this.list, [groupId]: { ...group, list } });
    return id;
  }

  itemRemove(groupId, id) {
    const group = this.list[groupId];
    const list = without(group.list, id);
    this.setList({ ...this.list, [groupId]: { ...group, list } });
    return id;
  }
}

export { Group, GroupList };
