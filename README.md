# postgis
This project was just some fun using postgis extension to do some geospacial queries. Using Node with unit tests, linting and coverage.
Another fun way to do this may be with MongoDB (https://www.mongodb.com/docs/manual/geospatial-queries/). Maybe after some other projects.

## getting started (from postgis directory)
- ``./setup.sh``
- ``cd node``
- ``npm install``
- ``node ./src/run.js``
- Run some SQL in a Postgres client (https://www.pgadmin.org/download/)
- ``cd ..``
- ``./cleanup.sh``

## node stuff (from the node directory i.e. cd node)
- ```npm install```
- ```npm run lint```
- ```npm run coverage``` (html report is at ./coverage/lcov-report/index.html)

## docker stuff
- ```docker network ls```
- ```docker network rm <name>```
- ```docker rmi --force <name>```

## script stuff
- ```./setup.sh```
- ```./cleanup.sh```

## sql stuff
Assuming you installed and connected pgAdmin (https://www.pgadmin.org/download/), you can now query the tables.
- ```
    SELECT * FROM cities c
    WHERE ST_DistanceSphere(
            ST_MakePoint(c.latitude, c.longitude),
            ST_MakePoint(39.362068, -9.157140) --"city of Obidos, Spain"
        ) <= 1609.34 * 50; -- "within 50 miles"
  ```
- ```
    SELECT * FROM geonames g
    WHERE ST_DistanceSphere(
            ST_MakePoint(g.latitude, g.longitude),
            ST_MakePoint(45.5152, -122.6784) --"city of Portland, OR, USA"
        ) <= 1609.34 * 20; -- "within 20 miles"
  ```

## References
- https://download.geonames.org/export/dump/readme.txt
- https://node-postgres.com/apis/client
- https://download.geonames.org/export/dump/?C=S;O=A
- https://www.postgresql.org/docs/17/gist.html
