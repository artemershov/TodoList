import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

const order = (context, param) => {
  let tempList = context.list;
  if (param.filter) tempList = filter(tempList, param.filter);
  if (param.sort) tempList = orderBy(tempList, ...param.sort);
  if (param.reverse) tempList.reverse();
  const order = tempList.map(i => i.id);
  return { order };
};

export default order;
