# user-website/client/Dockerfile
FROM node:18

WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose Vite's default dev port
EXPOSE 3000

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
