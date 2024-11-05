const chai = require('chai');

const tbl_geonames = require('../../src/sql/tbl_geonames.js');

describe('Geonames SQL.', function() {
  describe('getInserts verification', function() {
    it('Check the insert statement construction.', function() {
        const object = {
            countryCode: '8',
            geonameId: '0',
            name: '1',
            latitude: '-4.0001',
            longitude: '5.1001',
            timezone: '17',
        }

        const expected = "INSERT INTO geonames (country_code, geoname_id, name, latitude, longitude, timezone) " +
            "VALUES ('8', '0', '1', -4.0001, 5.1001, '17');"

        const result = tbl_geonames.getInsert(object)
        chai.expect(result).to.equal(expected)
    });
  });
});