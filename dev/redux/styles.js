import { TodoApp } from './index';

const actions = {
  setUrl: 'STYLES_SET_BG_URL',
  setColor: 'STYLES_SET_BG_COLOR',
  setStretch: 'STYLES_SET_BG_STRETCH',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setUrl:
      TodoApp.stylesActions('setBgUrl', action.data);
      break;
    case actions.setColor:
      TodoApp.stylesActions('setBgColor', action.data);
      break;
    case actions.setStretch:
      TodoApp.stylesActions('setBgStretch', action.data);
      break;
  }
  return TodoApp.getStyles();
};

export default reducer;
