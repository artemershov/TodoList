import SimpleRecord from './SimpleRecord';

export default class History extends SimpleRecord {
  constructor(id, event) {
    super(id);
    this.event = event;
  }
}
