FROM node:18-alpine

WORKDIR /app

# Copy package.json first to leverage cache
COPY package*.json ./
RUN npm install

# Copy all code
COPY . .

# Expose the backend port
EXPOSE 3000

# Run the backend
CMD ["node", "backend/src/server.js"]
