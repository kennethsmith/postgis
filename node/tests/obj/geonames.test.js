const chai = require('chai');
//const chaiAsPromised = require('chai-as-promised');
//chai.use(chaiAsPromised).should();

const geonames = require('../../src/obj/geonames.js');
//const database = require('./mocks/database.js');

//const context = { connection: database.connection };

describe('Geonames object.', function() {
  describe('geonamesObj verification', function() {
    it('Check the object construction.', function() {
        const expected = {
            countryCode: '8',
            geonameId: '0',
            name: '1',
            latitude: '4',
            longitude: '5',
            timezone: '17',
        }
        const line = [
            '0', '1', '2', '3', '4',
            '5', '6', '7', '8', '9',
            '10', '11', '12', '13', '14',
            '15', '16', '17', '18', '19',
        ]

        const result = geonames.geonameObj(line)
        chai.expect(result).to.deep.equal(expected)
    });

    //it('Data locations.', function() {
    //    const result = geonames.dataLocations
    //    chai.expect(result).to.have.lengthOf(2)
    //    chai.expect(result).to.match(/(?:txt)/)
    //});
  });
});