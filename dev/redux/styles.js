import { TodoApp } from './index';

const actions = {
  setUrl: 'STYLES_SET_BG_URL',
  setColor: 'STYLES_SET_BG_COLOR',
  setStrech: 'STYLES_SET_BG_STRECH',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setUrl:
      TodoApp.stylesActions('setBgUrl', action.data);
      break;
    case actions.setColor:
      TodoApp.stylesActions('setBgColor', action.data);
      break;
    case actions.setStrech:
      TodoApp.stylesActions('setBgStrech', action.data);
      break;
  }
  return TodoApp.getStyles();
};

export default reducer;
