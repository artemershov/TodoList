import omit from 'lodash/omit';
import without from 'lodash/without';

const remove = (context, id) => {
  const lastId = context.lastId;
  const list = omit(context.list, id);
  const order = without(context.order, id);
  return { list, order, lastId };
};

export default remove;
