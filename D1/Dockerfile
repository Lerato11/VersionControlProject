FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# WORKDIR /app/frontend
RUN npm run build

# WORKDIR /app/backend/dist

EXPOSE 3000

CMD [ "node", "backend/dist/server.js" ]