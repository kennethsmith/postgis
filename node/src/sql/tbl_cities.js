exports.queries = {
    drop_cities: 'DROP TABLE IF EXISTS cities;',
    create_cities: 'CREATE TABLE cities (' +
                        'id SERIAL PRIMARY KEY,' +
                        'name VARCHAR(100),' +
                        'latitude NUMERIC,' +
                        'longitude NUMERIC' +
                    ');',

    insert_city_01: "INSERT INTO cities (name, latitude, longitude) VALUES ('Lisbon', 38.724874, -9.139604);",
    insert_city_02: "INSERT INTO cities (name, latitude, longitude) VALUES ('Porto', 41.158389, -8.629163);",
    insert_city_03: "INSERT INTO cities (name, latitude, longitude) VALUES ('Sintra', 38.800306, -9.379136);",
    insert_city_04: "INSERT INTO cities (name, latitude, longitude) VALUES ('Obidos', 39.362068, -9.157140);",
    insert_city_05: "INSERT INTO cities (name, latitude, longitude) VALUES ('Coimbra', 40.211491, -8.429200);",
    insert_city_06: "INSERT INTO cities (name, latitude, longitude) VALUES ('Covilha', 40.282650, -7.503260);",
    insert_city_07: "INSERT INTO cities (name, latitude, longitude) VALUES ('Fatima', 39.617207, -8.652142);",

    select_cities: 'SELECT * FROM cities;',

    select_porto_15mi: 'SELECT * ' +
                       'FROM cities c ' +
                       'WHERE ST_DistanceSphere(' +
                       '	ST_MakePoint(c.longitude, c.latitude),' +
                       '	ST_MakePoint(-9.157140, 39.362068)) <= 150 * 1609.34;',

    select_city_distances: 'SELECT name, latitude, longitude, ' +
                            '	ST_DistanceSphere(' +
                            '		ST_MakePoint(c.longitude, c.latitude),' +
                            '		ST_MakePoint(-10, 40)) / 1609.34 as distance ' +
                            'FROM cities c;',

    select_count_cities: 'SELECT COUNT(*) FROM cities;',
}