const chai = require('chai');

const database = require('../../src/utils/database.js')
const mock_pg = require('../mocks/pg.mock.js');

describe('Test Database.', function() {
  describe('Testing Run.', function() {
    it('Not equal.', async function() {
        const p = new mock_pg.Pool(database.config)

        const c = await database.pool(mock_pg, 'database_name')
        const a = await c.query('SELECT * FROM test')

        chai.assert.notDeepEqual(a, {})
    })
    it('Select.', async function() {
        const t = new mock_pg.Pool(database.config)
        const e = await database.run(t, ['SELECT * FROM test'])

        const c = await database.pool(mock_pg, 'database_name')
        const a = await database.run(c, ['SELECT * FROM test'])

        chai.assert.deepEqual(a, e)
    })
    it('Error during the query.', async function() {
        const t = new mock_pg.Pool(database.config)
        const e = await database.run(t, ['BAD QUERY'])

        const c = await database.pool(mock_pg, 'database_name')
        const a = await database.run(c, ['BAD QUERY'])

        chai.assert.deepEqual(a, e)
    })
    it('Error during the function.', async function() {
        const f = (c,q) => { throw new Error('BAD FUNC!!!') }

        const t = new mock_pg.Pool(database.config)
        const e = await database.run_f(f ,t, ['SELECT * FROM test'])

        const c = await database.pool(mock_pg, 'database_name')
        const a = await database.run_f(f ,t, ['SELECT * FROM test'])

        chai.assert.deepEqual(a, e)
    })
    it('Error before the query.', async function() {
        const t = new mock_pg.Pool(database.config)
        const e = await database.run(t, null)

        const c = await database.pool(mock_pg, 'database_name')
        const a = await database.run(t, null)

        chai.assert.deepEqual(a, e)
    })
  })
})