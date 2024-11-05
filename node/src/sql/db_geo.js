exports.db_name = 'geo'

exports.queries = {
    drop_geos: 'DROP DATABASE IF EXISTS geo WITH (FORCE);',
    create_geonames: 'CREATE DATABASE geo;',
}