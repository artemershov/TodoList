import React from 'react';
import TodoItem from './TodoItem.js'
import TodoItemEditForm from './TodoItemEditForm.js'

export default class TodoItemContainer extends React.Component {
  state = {
    formOpen: false
  }
  formToggle = () => this.setState({formOpen: !this.state.formOpen})
  render = () => pug`
    if this.state.formOpen
      TodoItemEditForm(
        data=this.props.data,
        submit=this.props.actions.edit,
        cancel=this.formToggle
      )
    else
      TodoItem(
        data=this.props.data,
        edit=this.formToggle,
        actions=this.props.actions
      )
  `;
}
