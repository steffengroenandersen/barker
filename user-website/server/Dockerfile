#user-website/server/Dockerfile
FROM node:18

WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose Express' port
EXPOSE 3000

# Start Express server
CMD ["node", "server.js"]