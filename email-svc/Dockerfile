#moderation-svc/server/Dockerfile
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Start Express server
CMD ["node", "server.js"]




