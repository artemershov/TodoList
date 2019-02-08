import React, { Fragment } from 'react';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

export default class SettingsList extends React.Component {
  setBgUrl = e => this.props.actions('setBgUrl')(e.target.value);
  setBgStrech = e => this.props.actions('setBgStrech')(e.target.checked);
  setBgColor = e => this.props.actions('setBgColor')(e.currentTarget.value);
  render = () => (
    <Fragment>
      <FormGroup>
        <Label>Фоновый цвет</Label>
        <Row noGutters>
          <Col className="p-2" xs="4">
            <Button
              className="d-block w-100"
              color="primary"
              value="primary"
              onClick={this.setBgColor}>
              {this.props.settings.color == 'primary' ? (
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
              onClick={this.setBgColor}>
              {this.props.settings.color == 'info' ? (
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
              onClick={this.setBgColor}>
              {this.props.settings.color == 'success' ? (
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
              onClick={this.setBgColor}>
              {this.props.settings.color == 'warning' ? (
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
              onClick={this.setBgColor}>
              {this.props.settings.color == 'danger' ? (
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
              onClick={this.setBgColor}>
              {this.props.settings.color == 'dark' ? (
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
          onChange={this.setBgUrl}
          value={this.props.settings.url || ''}
          placeholder="URL"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            onChange={this.setBgStrech}
            checked={this.props.settings.strech || false}
          />
          Растянуть
        </Label>
      </FormGroup>
    </Fragment>
  );
}
