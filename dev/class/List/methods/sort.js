import orderBy from 'lodash/orderBy';

const sort = (context, param, reverse = false) => {
  const order = orderBy(context.list, ...param).map(i => i.id);
  if (reverse) order.reverse();
  return { order };
};

export default sort;
