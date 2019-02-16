import React from 'react';
import { connect } from 'react-redux';
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

const Header = props => (
  <div className="position-fixed fixed-top py-2 bg-light shadow">
    <Container>
      <Row noGutters>
        <Col xs="6" sm="4" md="3">
          <Logo />
        </Col>
        <Col sm="4" md="6" className="px-2 d-none d-sm-block">
          <Input onChange={props.search} maxLength="200" placeholder="Поиск" />
        </Col>
        <Col xs="6" sm="4" md="3" className="text-right">
          <Button color="link" onClick={props.showGroups}>
            <FontAwesomeIcon icon={faFolder} fixedWidth />
          </Button>
          <Button color="link" onClick={props.showSettings}>
            <FontAwesomeIcon icon={faCog} fixedWidth />
          </Button>
          <Button color="link" onClick={props.showProfile}>
            <FontAwesomeIcon icon={faUser} fixedWidth />
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

const mapDispatch = dispatch => ({
  search: e => dispatch({ type: 'SEARCH', data: e.target.value }),
  showGroups: () => dispatch({ type: 'SIDEBAR_SHOW_GROUPS' }),
  showSettings: () => dispatch({ type: 'SIDEBAR_SHOW_SETTINGS' }),
  showProfile: () => dispatch({ type: 'SIDEBAR_SHOW_PROFILE' }),
});
export default connect(
  undefined,
  mapDispatch
)(Header);
