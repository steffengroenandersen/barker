# barker

### user-website todo

- [x] Create React frontend
- [x] Create Express Backend
- [x] Create MongoDB
- [x] Deploy Docker containers
- [ ] Create signup flow
- [ ] Create login flow
- [ ] Create post bark flow
- [ ] Create home page with barks
- [ ] Create and send RabbitMQ post.created flow
- [ ] Create and send RabbitMQ email.send flow

### moderation-svc todo

- [x] Create RabbitMQ Consumer
- [ ] Create Docker containers
- [ ] Create Scanner functionality
- [ ] Create consume RabbitMQ post.created flow
- [ ] Create and send RabbitMQ post.flagged flow

### email-svc todo

- [ ] Create Express backend
- [ ] Create Docker containers
- [ ] Create SendGrid integration
- [ ] Create Welcome email
- [ ] Create consume email.send flow
- [ ] Create automated email send flow

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

# Barker User Website

## Client

React
http://localhost:5173/

cd user-website/client
npm run dev

## Server

Express
http://localhost:3000/

cd user-website/server
npm run dev

## Database

MongoDB
mongodb://mongodb:27017

Install and run MongoDB
