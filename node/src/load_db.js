const
    database = require('./utils/database.js'),
    files = require('./utils/files.js'),
    objGeonames = require('./obj/geonames.js'),
    sqlDbGeo = require('./sql/db_geo.js'),
    sqlExtPostgis = require('./sql/ext_postgis.js'),
    sqlTblCities = require('./sql/tbl_cities.js'),
    sqlTblGeonames = require('./sql/tbl_geonames.js')

exports.addGeonamesInserts = (fs) => {
    const objs = []
    files.getCsvFiles(fs, objGeonames.dataLocations).forEach((obj) => {
        objs.push(objGeonames.geonameObj(obj))
    })

    exports.addLines(
        objs,
        sqlTblGeonames
    )
}

exports.addLines = (objs, tbl) => {
    const
        inc = 1,
        pad = 9
    let cnt = 0
    objs.forEach((obj) => {
        cnt += inc
        tbl.queries[tbl.query_prefixes.inserts + cnt.toString().padStart(pad, '0')] = tbl.getInsert(obj)
    })
}

exports.addDb = async (pg) => {
    // Add the database.
    await database.run(
        await database.pool(pg, 'postgres'),
        sqlDbGeo.queries
    )

    // Add the postgis extension to the database.
    await database.run(
        await database.pool(pg, sqlDbGeo.db_name),
        sqlExtPostgis.queries
    )
}

exports.runCities = async (pg) => {
    // Run the cities table queries.
    await database.run(
        await database.pool(pg, sqlDbGeo.db_name),
        sqlTblCities.queries
    )
}

exports.runGeonames = async (fs, pg) => {
    // Read the geonames csvs and load the inserts into the queries.
    exports.addGeonamesInserts(fs)

    // Run the geonames queries.
    await database.run(
        await database.pool(pg, sqlDbGeo.db_name),
        sqlTblGeonames.queries
    )

    await database.run(
        await database.pool(pg, sqlDbGeo.db_name),
        {q1: sqlTblGeonames.queries.select_count_all}
    )
}

exports.run = async (fs, pg) => {
    await exports.addDb(pg)
    await exports.runCities(pg)
    await exports.runGeonames(fs, pg)
}