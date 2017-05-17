import zJSHelpers from '../../src/zetoff-js-helpers';

describe('zJSHelpers', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(zJSHelpers, 'greet');
      zJSHelpers.greet();
    });

    it('should have been run once', () => {
      expect(zJSHelpers.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(zJSHelpers.greet).to.have.always.returned('hello');
    });
  });
});
