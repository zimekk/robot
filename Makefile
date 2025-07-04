# branch = main

default: fetch up migrate prune

config:
	docker-compose config

exec:
	docker-compose exec app sh

fetch:
	git fetch origin && git reset --hard origin

import:
	packages/sql/scripts/import.sh

logs:
	docker-compose logs -f --tail=25 app

migrate:
	docker-compose exec app pnpm --filter=@dev/sql run migrate:up

prune:
	docker ps -a && docker system prune

ps:
	docker-compose ps

restart:
	docker-compose restart

stop:
	docker-compose stop app

up:
	docker-compose -f docker-compose.yml up --build -d
