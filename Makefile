build:
	docker compose build

run:
	docker compose up -d

stop:
	docker compose down

clean: stop
	docker image rm bluelake_website-web || true

logs:
	docker compose logs -f
