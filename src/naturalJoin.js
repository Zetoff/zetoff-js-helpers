import _ from 'lodash';

/**
 * Joins elements of a list adding a natural join between the last
 * 2 items.
 *
 * @param {Array|Object} list
 *  List of elements to join
 * @param {string} join
 *  Word to use as last join
 * @param {string} separator
 *  Separator between elements but the last
 * @return {string}
 *  Joined string
 */
 const naturalJoin = (list, join = 'and', separator = ', ') => {
  const size = _.size(list);
  const last = _.last(list);
  const rest = _.take(list, size - 1);

  if (size <= 1) {
    return `${last}`;
  } else {
    return `${rest.join(separator)} ${join} ${last}`;
  }
}

export default naturalJoin;
