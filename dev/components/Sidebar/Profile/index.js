import React, { Fragment } from 'react';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardBody from 'reactstrap/lib/CardBody';
import Placeholder from '../../shared/Placeholder';

const Profile = () => (
  <Fragment>
    <Card className="mb-4">
      <CardHeader>Регистрация и вход</CardHeader>
      <CardBody>
        <Placeholder title="В разработке" />
      </CardBody>
    </Card>
    <Card>
      <CardHeader>Управление данными</CardHeader>
      <CardBody>
        <Placeholder title="В разработке" />
      </CardBody>
    </Card>
  </Fragment>
);

export default Profile;
