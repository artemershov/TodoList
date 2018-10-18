import React from 'react';

const leadZero = num => num.toString().length == 1 ? '0' + num : num;
const formatDate = date => {
  date = new Date(date);
  const hour  = leadZero(date.getHours());
  const mins  = leadZero(date.getMinutes());
  const day   = leadZero(date.getDate());
  const month = leadZero(date.getMonth());
  const year  = date.getFullYear();
  return day + '.' + month + '.' + year + ' ' + hour + ':' + mins;
}

export default class TodoItem extends React.Component {
  checkDone = () => {
    this.props.data.done = !this.props.data.done;
    this.props.data.doneDate = new Date().getTime();
    this.props.actions.edit(this.props.data);
  }
  remove = () => {
    if (confirm('Вы точно хотите удалить данную задачу?')) {
      this.props.actions.remove(this.props.data);
    }
  }
  render = () => pug`
    table.w-100(cellPadding=0)
      tbody
        tr
          td

            //- Check btn
            button.btn.btn-sm.btn-link(type="button", onClick=this.checkDone)
              if this.props.data.done
                i.icon-ok-squared.lead
              else
                i.icon-check-empty.lead

          td.px-2.w-100(style={lineHeight: 1.2})

            //- Title
            .font-weight-bold #{this.props.data.title}

            //- Date
            .text-muted.small.d-none.d-sm-block
              if this.props.data.done
                | Завершено: #{formatDate(this.props.data.doneDate)}
              else
                | Добавлено: #{formatDate(this.props.data.addDate)}

          td
            .btn-group

              //- Edit btn
              button.btn.btn-sm.btn-light(type="button", onClick=this.props.edit)
                i.icon-edit

              //- Remove btn
              button.btn.btn-sm.btn-light(type="button", onClick=this.remove)
                i.icon-trash-empty
  `;
}
