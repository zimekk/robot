# robot

[zimekk.github.io/robot](https://zimekk.github.io/robot)

## install

```sh
nvm install v14
npm i -g yarn
```

```sh
node -v # v14.18.2
yarn -v # 1.22.19
```

## run

```sh
yarn
yarn start # ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

## docker

```sh
docker-compose config # services:
docker-compose up --build # app_1  | ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

```sh
docker-compose exec app sh
/app # yarn workspace @dev/sql run migrate:up
```

```sh
docker-compose exec sql psql robot -U postgres
```

```sh
podman-compose up redis -d
```

```sh
docker-compose up --build -d && docker system prune -f
```

```sh
docker-compose down --remove-orphans
```

```sh
docker-compose -f docker-compose.yml build --no-cache && docker-compose -f docker-compose.yml up -d && docker system prune -f
```

## backup & restore

```sh
docker-compose exec -u postgres sql psql robot
docker-compose exec -u postgres sql pg_dump --clean --if-exists robot | gzip -c > "backup/dump_$(date +%Y%m%d_%H%M).sql.gz"
gunzip -c tmp/dump_20230602_1811.sql.gz | docker-compose exec -T -u postgres sql psql robot
```

## deploy

```sh
git fetch && git reset --hard origin
docker-compose -f docker-compose.yml up --build -d && docker system prune -f
docker-compose exec app yarn workspace @dev/sql run migrate:up
```

```sh
docker-compose logs -f --tail=25 app
docker-compose exec app sh
```
