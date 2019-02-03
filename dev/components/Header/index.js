import React from 'react';
import Logo from './Logo';
import Settings from './Settings';
import Collapse from '../shared/Collapse';
import Navbar from 'reactstrap/lib/Navbar';
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
  state = {
    isOpen: false,
    search: '',
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  searchHandler = e => {
    const search = e.target.value;
    this.setState({ search });
    this.props.searchAction(search);
  };

  render = () => (
    <Navbar className="d-block p-0 bg-dark" dark fixed="top">
      <div className="py-2 px-3">
        <Container>
          <Row className="no-gutters">
            <Col sm={3}>
              <Logo />
            </Col>
            <Col sm={6} className="px-2">
              <Input
                onChange={this.searchHandler}
                value={this.state.search}
                maxLength="200"
                placeholder="Поиск"
              />
            </Col>
            <Col sm={3} className="text-right">
              <Button color="dark">
                <FontAwesomeIcon icon={faFolder} fixedWidth />
              </Button>
              <Button className="mx-2" color="dark" onClick={this.toggle}>
                <FontAwesomeIcon icon={faCog} fixedWidth />
              </Button>
              <Button color="dark">
                <FontAwesomeIcon icon={faUser} fixedWidth />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Collapse isOpen={this.state.isOpen}>
        <div className="py-2 shadow bg-light">
          <Container>
            <Settings
              settings={this.props.settings}
              actions={this.props.settingsActions}
            />
          </Container>
        </div>
      </Collapse>
    </Navbar>
  );
}
