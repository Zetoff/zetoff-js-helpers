import { validateEmail } from '../../src/zetoff-js-helpers';

describe('validateEmail', () => {

  it('hello@world.com should validate to true', () => {
    const result = validateEmail('hello@world.com');
    expect(result).equal(true);
  });

  it('helloworld.com should validate to true', () => {
    const result = validateEmail('helloworld.com');
    expect(result).equal(false);
  });

  it('hello@world should validate to true', () => {
    const result = validateEmail('hello@world');
    expect(result).equal(false);
  });
});
