import React from 'react';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import FormGroup from 'reactstrap/lib/FormGroup';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default class Settings extends React.Component {
  render = () => (
    <Row>
      <Col>
        <FormGroup>
          <Label>Группировка</Label>
          <Input type="select">
            <option value="">По проектам</option>
            <option value="">По приоритетам</option>
            <option value="">По дедлайну</option>
            <option value="">По статусу</option>
          </Input>
        </FormGroup>
      </Col>
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
                  <Input type="checkbox" />В обратном порядке
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Input type="select">
            <option value="">По дате создания</option>
            <option value="">По статусу</option>
            <option value="">По приоритету</option>
            <option value="">По дедлайну</option>
          </Input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Фильтр</Label>
          <Input type="select">
            <option value="">Без фильтра</option>
            <option value="">Выполненные</option>
            <option value="">Не выполненные</option>
            <option value="">С приоритетом</option>
            <option value="">Без приоритета</option>
            <option value="">С дедлайном</option>
            <option value="">Без дедлайна</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
}
