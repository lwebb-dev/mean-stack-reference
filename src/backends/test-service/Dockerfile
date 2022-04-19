FROM node:latest AS node

WORKDIR /app
COPY /package*.json .
RUN npm install
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]