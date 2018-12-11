import formatRelative from 'date-fns/formatRelative';
import ru from 'date-fns/locale/ru';

const FormattedDate = props =>
  formatRelative(new Date(props.date), Date.now(), { locale: ru });

export default FormattedDate;
