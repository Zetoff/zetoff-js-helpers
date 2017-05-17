import { naturalJoin } from '../../src/zetoff-js-helpers';

describe('naturalJoin', () => {

  it('[apples, oranges, bananas] should be Apples, Oranges and Bananas', () => {
    const result = naturalJoin(['apples', 'oranges', 'bananas']);
    expect(result).equal('apples, oranges and bananas');
  });

  it('[apples, oranges, bananas] with - separator and or join should be Apples - Oranges or Bananas', () => {
    const result = naturalJoin(['apples', 'oranges', 'bananas'],'or',' - ');
    expect(result).equal('apples - oranges or bananas');
  });

});
