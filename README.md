# barker

### user-website todo

- [x] Create React frontend
- [x] Create Express Backend
- [x] Create MongoDB
- [x] Deploy Docker containers
- [ ] Create signup flow
- [ ] Create login flow
- [x] Create post bark flow
- [ ] Create home page with barks
- [x] Create and send RabbitMQ post.created flow
- [x] Create and send RabbitMQ email.send flow

### moderation-svc todo

- [x] Create RabbitMQ Consumer
- [x] Create Docker containers
- [x] Create consume RabbitMQ post.created flow
- [x] Create Scanner functionality
- [x] Create and send RabbitMQ post.flagged flow

### email-svc todo

- [x] Create backend
- [x] Create Docker containers
- [x] Create SendGrid integration
- [ ] Create idempotence checker
- [x] Create Welcome email
- [x] Create consume email.send flow
- [x] Create automated email send flow

### admin-website todo

- [ ] Create React frontend
- [ ] Create React Backend
- [ ] Create MongoDB
- [ ] Create Docker containers
- [ ] Create signup flow
- [ ] Create login flow
- [ ] Create consume RabbitMQ posts
- [ ] Display flagged posts
- [ ] Create accept post flow
- [ ] Create remove post flow
- [ ] Create and send RabbitMQ post.delete flow

### test svc

- [x] Create automatic signup

1. cd test-svc
2. npm run dev

# Barker User Website

## User Website Client

React
http://localhost:5173/

1. cd user-website/client
2. npm run dev

## User Website Server

Express
http://localhost:3000/

1. cd user-website/server
2. npm run dev

## Moderation Service

1. cd moderation-svc
2. nodemon server.js

## User Website Database

MongoDB
mongodb://mongodb:27017

Install and run MongoDB

## Email Service

1. cd email-svc
2. npm run dev

## Barker RabbitMQ

http://localhost:15672/

Login credentials DEV

- guest
- guest

Login credentials Docker

- admin
- admin
