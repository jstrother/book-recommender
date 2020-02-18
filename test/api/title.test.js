const expect = require('chai').expect;
const axios = require('axios');
const replaceSpaces = require('../../functions/replaceSpaces');

describe('axios endpoint', () => {
  it('hits TasteDive endpoint', async () => {
    const title = 'and then there were none';
    const bookList = await axios.get('https://tastedive.com/api/similar', {
      params: {
        q: replaceSpaces(title),
        type: 'books',
        info: 1,
        limit: 7,
        k: process.env.TASTE_DIVE_API_KEY,
      },
    });
    expect(bookList.data).to.be.an('object');
  });
});
