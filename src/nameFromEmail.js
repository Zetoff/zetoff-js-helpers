import _ from 'lodash';

const nameFromEmail = (email) => {

  let name = email.slice(0, _.findIndex(email, (o) => (o == '@')));
  name = _.chain(name).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ').startCase().value();

  return name;
};

export default nameFromEmail;
