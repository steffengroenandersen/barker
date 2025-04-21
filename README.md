# barker

To do

[x] Create user-app server that takes in

[x] Make user-app server send a message to a queue

[x] Create user-svc and make it listen messages

[] Make user-svc save to db

[] Expose user-svc so it can be used for auth

# How to run

1. Make sure Docker Desktop is running
2. run 'docker-compose up --build'

## RabbitMQ

Is running on http://localhost:15672/

## User Client

- cd user-app/client
- npm run dev
- Is running on http://localhost:5173/

## User Server

- cd user-app/server
- npm run dev
- Is running on http://localhost:3000

## Test Service

- cd load-test-svc
- npm run dev
