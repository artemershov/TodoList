import React from 'react';
import { sortParam, filterParam } from '../../class/Settings';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import FormGroup from 'reactstrap/lib/FormGroup';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default class Settings extends React.Component {
  setFilter = e => this.props.actions('setFilter')(e.target.value);
  setSort = e => this.props.actions('setSort')(e.target.value);
  setReverse = e => this.props.actions('setReverse')(e.target.checked);

  render = () => (
    <Row>
      <Col>
        <FormGroup>
          <Row>
            <Col>
              <Label>Сортировка</Label>
            </Col>
            <Col>
              <FormGroup
                className="small text-right"
                style={{ marginTop: 3 }}
                check>
                <Label check>
                  <Input
                    type="checkbox"
                    onChange={this.setReverse}
                    checked={this.props.settings.reverse || false}
                  />
                  {sortParam.reverse.title}
                </Label>
              </FormGroup>
            </Col>
          </Row>
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
      </Col>
      <Col>
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
      </Col>
    </Row>
  );
}
