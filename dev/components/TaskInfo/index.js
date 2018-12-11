import React, { Fragment } from 'react';
import Description from './Description';
import Subtasks from './Subtasks';
import Comments from './Comments';
import History from './History';
import TabContent from 'reactstrap/lib/TabContent';
import TabPane from 'reactstrap/lib/TabPane';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import styled from 'styled-components';

const Pointer = styled.div`
  cursor: pointer;
  user-select: none;
`;

export default class TaskInfo extends React.Component {
  state = { activeTab: '0' };

  toggle = e => {
    const tab = e.target.dataset.tab;
    this.setState({ activeTab: tab });
  };

  render = () => (
    <Fragment>
      <hr />
      <Nav className="mx-2 mb-3" tabs>
        <NavItem>
          <Pointer>
            <NavLink
              className={this.state.activeTab == 0 ? 'active' : ''}
              onClick={this.toggle}
              data-tab="0">
              Описание
            </NavLink>
          </Pointer>
        </NavItem>
        <NavItem>
          <Pointer>
            <NavLink
              className={this.state.activeTab == 1 ? 'active' : ''}
              onClick={this.toggle}
              data-tab="1">
              Подзадачи
            </NavLink>
          </Pointer>
        </NavItem>
        <NavItem>
          <Pointer>
            <NavLink
              className={this.state.activeTab == 2 ? 'active' : ''}
              onClick={this.toggle}
              data-tab="2">
              Комментарии
            </NavLink>
          </Pointer>
        </NavItem>
        <NavItem>
          <Pointer>
            <NavLink
              className={this.state.activeTab == 3 ? 'active' : ''}
              onClick={this.toggle}
              data-tab="3">
              История
            </NavLink>
          </Pointer>
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
    </Fragment>
  );
}
