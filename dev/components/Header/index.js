import React from 'react';
import Logo from './Logo';
import Container from 'reactstrap/lib/Container';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

export default class Header extends React.Component {
  state = { search: '' };

  searchHandler = e => {
    const search = e.target.value;
    this.setState({ search });
    this.props.actions.search(search);
  };

  showGroups = () => this.props.actions.showSidebar('groups');
  showSettings = () => this.props.actions.showSidebar('settings');
  showProfile = () => this.props.actions.showSidebar('profile');

  render = () => (
    <div className="position-fixed fixed-top py-2 bg-light border-bottom shadow">
      <Container>
        <Row noGutters>
          <Col xs="6" sm="4" md="3">
            <Logo />
          </Col>
          <Col sm="4" md="6" className="px-2 d-none d-sm-block">
            <Input
              onChange={this.searchHandler}
              value={this.state.search}
              maxLength="200"
              placeholder="Поиск"
            />
          </Col>
          <Col xs="6" sm="4" md="3" className="text-right">
            <Button color="link" onClick={this.showGroups}>
              <FontAwesomeIcon icon={faFolder} fixedWidth />
            </Button>
            <Button color="link" onClick={this.showSettings}>
              <FontAwesomeIcon icon={faCog} fixedWidth />
            </Button>
            <Button color="link" onClick={this.showProfile}>
              <FontAwesomeIcon icon={faUser} fixedWidth />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
