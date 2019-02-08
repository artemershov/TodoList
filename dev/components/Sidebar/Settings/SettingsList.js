import React, { Fragment } from 'react';
import { sortParam, filterParam } from '../../../class/Settings';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

export default class SettingsList extends React.Component {
  setFilter = e => this.props.actions('setFilter')(e.target.value);
  setSort = e => this.props.actions('setSort')(e.target.value);
  setReverse = e => this.props.actions('setReverse')(e.target.checked);
  render = () => (
    <Fragment>
      <FormGroup>
        <Label>Фильтр</Label>
        <Input
          type="select"
          onChange={this.setFilter}
          value={this.props.settings.filter}>
          {filterParam.list.map(i => (
            <option value={i} key={i}>
              {filterParam[i].title}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Сортировка</Label>
        <Input
          type="select"
          onChange={this.setSort}
          value={this.props.settings.sort}>
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
            onChange={this.setReverse}
            checked={this.props.settings.reverse || false}
          />
          {sortParam.reverse.title}
        </Label>
      </FormGroup>
    </Fragment>
  );
}
