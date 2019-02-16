import SimpleRecord from './SimpleRecord';

export default class Comment extends SimpleRecord {
  constructor(id, message) {
    super(id);
    this.message = message;
  }
}
