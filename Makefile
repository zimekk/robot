up:
	git fetch origin main && git reset --hard origin
	docker-compose -f docker-compose.yml up --build -d && docker system prune -f
	docker-compose exec app yarn workspace @dev/sql run migrate:up

logs:
	docker-compose logs -f --tail=25 app

exec:
	docker-compose exec app sh
