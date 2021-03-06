import formatDistance from 'date-fns/formatDistance';

export default ({ Vue }) => {
  Vue.filter('fromNow', (value) => formatDistance(value, new Date()));
};
