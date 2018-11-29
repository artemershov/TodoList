import { formatRelative } from 'date-fns';
import ru from 'date-fns/locale/ru';

const RelativeDate = props =>
  formatRelative(new Date(props.date), Date.now(), { locale: ru });

export default RelativeDate;
