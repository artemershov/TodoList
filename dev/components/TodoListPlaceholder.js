import React from 'react';

export default class ListPlaceholder extends React.Component {
  render = () => (
    <div className="text-center my-5 mx-4">
      <h3>Нет задач</h3>
      <div className="text-muted">
        Добавьте новые задачи используя форму выше
      </div>
    </div>
  );
}
