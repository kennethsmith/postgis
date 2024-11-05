const pg = require('pg')
const fs = require('fs')
const loadDb = require('./load_db.js')

loadDb.run(fs, pg)