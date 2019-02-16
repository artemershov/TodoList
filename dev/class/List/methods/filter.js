import _filter from 'lodash/filter';

const filter = (context, param) => {
  const order = _filter(context.list, param).map(i => i.id);
  return { order };
};

export default filter;
