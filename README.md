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
```

```sh
podman-compose up redis -d
```

```sh
docker-compose up --build -d && docker system prune -f
```

```sh
docker-compose -f docker-compose.yml up --build -d && docker system prune -f
```

```sh
docker-compose -f docker-compose.yml build --no-cache && docker-compose -f docker-compose.yml up -d && docker system prune -f
```
