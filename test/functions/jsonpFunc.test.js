const expect = require('chai').expect;
const consola = require('consola');
const jsonpFunc = require('../../functions/jsonpFunc');
const replaceSpaces = require('../../functions/replaceSpaces');

describe('jsonp function', () => {
  it('returns data from the API', () => {
    const title = 'and then there were none';
    const booklist = jsonpFunc.send(
      `https://tastedive.com/api/similar?q=${replaceSpaces(title)}&type=books&info=1&limit=7&k=${
        process.env.TASTE_DIVE_API_KEY
      }`,
      {
        callbackName: '',
        onSuccess(json) {
          consola.ready({
            message: `success! json = ${json}`,
            badge: true,
          });
        },
      },
    );
    expect(booklist).to.be.an('object');
  });
});
