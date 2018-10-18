import React from 'react';

export default class EditForm extends React.Component {
  state = {
    data: this.props.data.title
  }
  change = e => {
    const data = e.target.value;
    this.setState({data});
  }
  submit = e => {
    e.preventDefault();
    if (this.props.data.title !== this.state.data) {
      const todo = {...this.props.data, title: this.state.data};
      this.props.submit(todo);
    }
    this.props.cancel();
  }
  render = () => pug`
    form(onSubmit=this.submit)
      .input-group

        //- Title
        input.form-control(
          onChange=this.change,
          value=this.state.data,
          maxlength=200,
          required,
          placeholder="Название задачи"
        )

        .input-group-append

          //- Submit btn
          button.btn.btn-outline-secondary(type="submit")
            i.icon-ok

          //- Cancel btn
          button.btn.btn-outline-secondary(type="button", onClick=this.props.cancel)
            i.icon-cancel
  `;
}
