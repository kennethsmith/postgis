exports.queries = {
    postgis_drop: 'DROP EXTENSION IF EXISTS postgis;',
    postgis_install: 'CREATE EXTENSION postgis;',
    postgis_show_ver: 'SELECT PostGIS_Full_Version();',
    postgis_show_exts: "SELECT * FROM pg_available_extensions WHERE name = 'postgis';",
}