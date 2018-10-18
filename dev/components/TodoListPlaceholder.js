import React from 'react';

export default class ListPlaceholder extends React.Component {
  render = () => pug`
    .text-center.my-5.mx-4
      h3 Нет задач
      .text-muted Добавьте новые задачи используя форму выше
  `;
}
