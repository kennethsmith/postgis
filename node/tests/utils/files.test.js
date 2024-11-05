const chai = require('chai');

const files = require('../../src/utils/files.js')
const mock_fs = require('../mocks/fs.mock.js');

describe('Test Files.', function() {
  describe('Testing Run.', function() {
    it('Not equal.', async function() {
        const a = mock_fs.readFileSync('', '')
        chai.assert.notDeepEqual(a, {})
    })
    it('Get Files.', async function() {
        const a = files.getCsvFiles(mock_fs, ['1','2'])
        chai.assert.notDeepEqual(a, {})
    })
    it('Add Inserts', async function() {
        const a = files.add_lines = ([], [], '', () => {})
        chai.assert.notDeepEqual(a, {})
    })
  })
})