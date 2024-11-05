const chai = require('chai');

const mock_fs = require('./mocks/fs.mock.js');
const mock_pg = require('./mocks/pg.mock.js');
const load_db = require('../src/load_db.js');

describe('Load Database.', function() {
  describe('Loading the database verification.', function() {
    it('Load up.', async function() {
        load_db.run(mock_fs, mock_pg)
    })
  })
})