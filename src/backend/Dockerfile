FROM node:18-alpine
# Установим git (и bash — тоже часто нужен)
RUN apk add --no-cache git bash
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["node", "ace", "serve", "--watch"]
