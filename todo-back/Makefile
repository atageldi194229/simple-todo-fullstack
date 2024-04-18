postgres:
	sudo docker run --name postgres16 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:16.1-alpine

createdb:
	sudo docker exec -it postgres16 createdb --username=root --owner=root todo_db

dropdb:
	sudo docker exec -it postgres16 dropdb todo_db

migrateup:
	yarn sequelize db:migrate

dev:
	yarn nodemon server.js

.PHONY: postgres createdb dropdb migrateup migratedown
