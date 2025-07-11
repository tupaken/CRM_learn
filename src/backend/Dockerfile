FROM node:18-alpine

RUN apk add --no-cache git bash
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["npm", "start"]
