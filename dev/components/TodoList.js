import React from 'react';
import TodoItemContainer from './TodoItemContainer.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class TodoList extends React.Component {
  render = () => (
    <ListGroup flush>
      {this.props.todos.map(i => (
        <ListGroupItem className="px-3" key={i.id}>
          <TodoItemContainer data={i} actions={this.props.actions} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
