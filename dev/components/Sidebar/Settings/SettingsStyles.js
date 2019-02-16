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
import colors from '../../../class/Settings/param/colors';

const SettingsStyles = props => (
  <Fragment>
    <FormGroup>
      <Label>Фоновый цвет</Label>
      <Row noGutters>
        {Object.keys(colors).map((el, idx) => (
          <Col key={idx} className="p-2" xs="4">
            <Button
              className="d-block w-100 text-white border-0"
              style={{ backgroundColor: colors[el] }}
              value={el}
              onClick={props.setBgColor}>
              {props.color == el ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <Fragment>&nbsp;</Fragment>
              )}
            </Button>
          </Col>
        ))}
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
          onChange={props.setBgStretch}
          checked={props.stretch || false}
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
  setBgStretch: e =>
    dispatch({ type: 'STYLES_SET_BG_STRETCH', data: e.target.checked }),
});
export default connect(
  mapState,
  mapDispatch
)(SettingsStyles);
