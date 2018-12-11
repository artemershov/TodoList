import React from 'react';
import Button from 'reactstrap/lib/Button';
import DatePicker from 'DatePicker';
import ru from 'date-fns/locale/ru';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons/faCalendarCheck';

const TaskFormDate = props => (
  <DatePicker
    type="element"
    value={props.date}
    onChange={props.onChange}
    locale={ru}>
    <Button outline color="secondary">
      <FontAwesomeIcon
        icon={props.date ? faCalendarCheck : faCalendar}
        fixedWidth
      />
    </Button>
  </DatePicker>
);

export default TaskFormDate;
