import React from 'react';

export default class AddForm extends React.Component {
  state = {
    data: ''
  }
  change = e => {
    const data = e.target.value;
    this.setState({data});
  }
  submit = e => {
    e.preventDefault();
    this.props.submit(this.state.data);
    this.setState({data: ''});
  }
  render = () => pug`
    form(onSubmit=this.submit)
      input.form-control(
        onChange=this.change,
        value=this.state.data,
        maxlength=200,
        required,
        placeholder="Название задачи"
      )
  `;
}
