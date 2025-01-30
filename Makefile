up:
	git fetch origin main && git reset --hard origin
	docker-compose -f docker-compose.yml up --build -d && docker system prune
	docker-compose exec app pnpm --filter=@dev/sql run migrate:up

logs:
	docker-compose logs -f --tail=25 app

exec:
	docker-compose exec app sh

restart:
	docker-compose restart
