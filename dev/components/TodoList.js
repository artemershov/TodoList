import React from 'react';
import TodoItemContainer from './TodoItemContainer.js'

export default class TodoList extends React.Component {
  render() {
    const list = this.props.todos.map(i => pug`
      li.list-group-item.px-3(key=i.id)
        TodoItemContainer(
          data=i,
          actions=this.props.actions
        )
    `);
    return pug`
      ul.list-group.list-group-flush #{list}
    `;
  }
}
