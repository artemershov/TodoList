import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import sortParam from '../../../class/Settings/param/sortParam';
import filterParam from '../../../class/Settings/param/filterParam';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

const SettingsList = props => (
  <Fragment>
    <FormGroup>
      <Label>Фильтр</Label>
      <Input type="select" onChange={props.setFilter} value={props.filter}>
        {filterParam.list.map(i => (
          <option value={i} key={i}>
            {filterParam[i].title}
          </option>
        ))}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label>Сортировка</Label>
      <Input type="select" onChange={props.setSort} value={props.sort}>
        {sortParam.list.map(i => (
          <option value={i} key={i}>
            {sortParam[i].title}
          </option>
        ))}
      </Input>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          onChange={props.setReverse}
          checked={props.reverse || false}
        />
        {sortParam.reverse.title}
      </Label>
    </FormGroup>
  </Fragment>
);

const mapState = state => state.settings;
const mapDispatch = dispatch => ({
  setFilter: e => {
    dispatch({ type: 'SETTINGS_SET_FILTER', data: e.target.value });
    dispatch({ type: 'UPDATE' });
  },
  setSort: e => {
    dispatch({ type: 'SETTINGS_SET_SORT', data: e.target.value });
    dispatch({ type: 'UPDATE' });
  },
  setReverse: e => {
    dispatch({ type: 'SETTINGS_SET_REVERSE', data: e.target.checked });
    dispatch({ type: 'UPDATE' });
  },
});
export default connect(
  mapState,
  mapDispatch
)(SettingsList);
