const expect = require('chai').expect;
const replaceSpaces = require('../../functions/replaceSpaces');

describe('replaceSpaces function', () => {
  it('should replace each space in a string with +', () => {
    const string = 'the rain in spain falls mainly in the plain';

    const newString = replaceSpaces(string);
    expect(newString).to.equal('the+rain+in+spain+falls+mainly+in+the+plain');
  });
});
