import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import SimpleForm from '../shared/SimpleForm';
import GroupContainer from './GroupContainer';

export default class Groups extends React.Component {
  formSubmit = data => this.props.actions('add')(data);
  render = () => (
    <Card>
      <CardHeader className="px-3">
        <SimpleForm submit={this.formSubmit} placeholder="Название группы" />
      </CardHeader>
      <ListGroup flush>
        {this.props.groups.map(i => (
          <ListGroupItem className="px-2" key={i.id}>
            <GroupContainer data={i} actions={this.props.actions} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
}
