exports.query_prefixes = {
    inserts: 'insert_geonames_'
}

exports.queries = {
    drop_geonames: 'DROP TABLE IF EXISTS geonames;',
    create_geonames: 'CREATE TABLE geonames (' +
                        'id SERIAL PRIMARY KEY, ' +
                        'country_code VARCHAR(2), ' +
                        'geoname_id VARCHAR(32), ' +
                        'name VARCHAR(512),' +
                        'latitude NUMERIC,' +
                        'longitude NUMERIC, ' +
                        'timezone VARCHAR(32)' +
                    ');',
    select_count_all: 'SELECT COUNT(*) FROM geonames;',
}

exports.getInsert = (r) => {
    const name = r.name.replaceAll("'", "''")

    return `INSERT INTO geonames ` +
        `(country_code, geoname_id, name, latitude, longitude, timezone) ` +
        `VALUES ('${r.countryCode}', '${r.geonameId}', '${name}', ${r.latitude}, ${r.longitude}, '${r.timezone}');`
}
