docker network create --subnet 172.18.0.0/16 -d bridge postgis
docker build . -t postgis:17-3.4
docker run -d --name some-postgis \
  --network postgis \
  --ip 172.18.0.10 \
  -p 5432:5432 \
  -e POSTGRES_DB=postgis \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=pass \
postgis:17-3.4