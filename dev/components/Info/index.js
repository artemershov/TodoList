import React from 'react';
import Description from './Description';
import Subtasks from './Subtasks';
import Comments from './Comments';
import History from './History.js';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const style = {
  cursor: 'pointer',
};

export default class Info extends React.Component {
  state = { activeTab: '0' };

  toggle = e => {
    const tab = e.target.dataset.tab;
    this.setState({ activeTab: tab });
  };

  render = () => (
    <div>
      <hr />
      <Nav className="mx-2 mb-3" tabs>
        <NavItem>
          <NavLink
            className={this.state.activeTab == 0 ? 'active' : ''}
            onClick={this.toggle}
            data-tab="0"
            style={style}>
            Описание
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={this.state.activeTab == 1 ? 'active' : ''}
            onClick={this.toggle}
            data-tab="1"
            style={style}>
            Подзадачи
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={this.state.activeTab == 2 ? 'active' : ''}
            onClick={this.toggle}
            data-tab="2"
            style={style}>
            Комментарии
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={this.state.activeTab == 3 ? 'active' : ''}
            onClick={this.toggle}
            data-tab="3"
            style={style}>
            История
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="px-2" activeTab={this.state.activeTab}>
        <TabPane tabId="0">
          <Description
            id={this.props.data.id}
            data={this.props.data.description}
            action={this.props.actions.description}
          />
        </TabPane>
        <TabPane tabId="1">
          <Subtasks
            id={this.props.data.id}
            data={this.props.data.subtasks}
            actions={this.props.actions.subtasks}
          />
        </TabPane>
        <TabPane tabId="2">
          <Comments
            id={this.props.data.id}
            data={this.props.data.comments}
            actions={this.props.actions.comments}
          />
        </TabPane>
        <TabPane tabId="3">
          <History data={this.props.data.history} />
        </TabPane>
      </TabContent>
    </div>
  );
}
