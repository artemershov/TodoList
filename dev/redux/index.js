import { createStore, combineReducers } from 'redux';
import TodoAppClass from '../class/TodoApp';
import todoReducer from './todo';
import searchReducer from './search';
import settingsReducer from './settings';
import stylesReducer from './styles';
import sidebarReducer from './sidebar';

const TodoApp = new TodoAppClass();

const initialState = {
  groups: TodoApp.getGroups(),
  search: [],
  settings: TodoApp.getSettings(),
  styles: TodoApp.getStyles(),
  sidebar: {
    isOpen: false,
    content: null,
  },
};

const reducers = combineReducers({
  groups: todoReducer,
  search: searchReducer,
  settings: settingsReducer,
  styles: stylesReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers, initialState);

export default store;
export { TodoApp, initialState };
