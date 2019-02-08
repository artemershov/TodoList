import React, { Fragment } from 'react';
import SettingsList from './SettingsList';
import SettingsStyles from './SettingsStyles';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardBody from 'reactstrap/lib/CardBody';

const Settings = props => (
  <Fragment>
    <Card className="mb-4">
      <CardHeader>Настройки списка</CardHeader>
      <CardBody>
        <SettingsList
          settings={props.settings}
          actions={props.settingsActions}
        />
      </CardBody>
    </Card>
    <Card>
      <CardHeader>Настройки дизайна</CardHeader>
      <CardBody>
        <SettingsStyles settings={props.styles} actions={props.stylesActions} />
      </CardBody>
    </Card>
  </Fragment>
);

export default Settings;
