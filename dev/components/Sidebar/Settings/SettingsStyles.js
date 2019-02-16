import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const SettingsStyles = props => (
  <Fragment>
    <FormGroup>
      <Label>Фоновый цвет</Label>
      <Row noGutters>
        <Col className="p-2" xs="4">
          <Button
            className="d-block w-100"
            color="primary"
            value="primary"
            onClick={props.setBgColor}>
            {props.color == 'primary' ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <span>&nbsp;</span>
            )}
          </Button>
        </Col>
        <Col className="p-2" xs="4">
          <Button
            className="d-block w-100"
            color="info"
            value="info"
            onClick={props.setBgColor}>
            {props.color == 'info' ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <span>&nbsp;</span>
            )}
          </Button>
        </Col>
        <Col className="p-2" xs="4">
          <Button
            className="d-block w-100"
            color="success"
            value="success"
            onClick={props.setBgColor}>
            {props.color == 'success' ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <span>&nbsp;</span>
            )}
          </Button>
        </Col>
        <Col className="p-2" xs="4">
          <Button
            className="d-block w-100"
            color="warning"
            value="warning"
            onClick={props.setBgColor}>
            {props.color == 'warning' ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <span>&nbsp;</span>
            )}
          </Button>
        </Col>
        <Col className="p-2" xs="4">
          <Button
            className="d-block w-100"
            color="danger"
            value="danger"
            onClick={props.setBgColor}>
            {props.color == 'danger' ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <span>&nbsp;</span>
            )}
          </Button>
        </Col>
        <Col className="p-2" xs="4">
          <Button
            className="d-block w-100"
            color="dark"
            value="dark"
            onClick={props.setBgColor}>
            {props.color == 'dark' ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <span>&nbsp;</span>
            )}
          </Button>
        </Col>
      </Row>
    </FormGroup>
    <FormGroup>
      <Label>Фоновая картинка</Label>
      <Input
        type="text"
        onChange={props.setBgUrl}
        value={props.url || ''}
        placeholder="URL"
      />
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          onChange={props.setBgStrech}
          checked={props.strech || false}
        />
        Растянуть
      </Label>
    </FormGroup>
  </Fragment>
);

const mapState = state => state.styles;
const mapDispatch = dispatch => ({
  setBgUrl: e => dispatch({ type: 'STYLES_SET_BG_URL', data: e.target.value }),
  setBgColor: e =>
    dispatch({ type: 'STYLES_SET_BG_COLOR', data: e.currentTarget.value }),
  setBgStrech: e =>
    dispatch({ type: 'STYLES_SET_BG_STRECH', data: e.target.checked }),
});
export default connect(
  mapState,
  mapDispatch
)(SettingsStyles);
