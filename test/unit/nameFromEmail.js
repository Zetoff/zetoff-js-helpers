import { nameFromEmail } from '../../src/zetoff-js-helpers';

describe('nameFromEmail', () => {

  it('john.smith@gmail.com should be John Smith', () => {
    const result = nameFromEmail('john.smith@gmail.com');
    expect(result).equal('John Smith');
  });

  it('john@gmail.com should be John', () => {
    const result = nameFromEmail('john@gmail.com');
    expect(result).equal('John');
  });
});
