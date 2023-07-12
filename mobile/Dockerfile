FROM node:lts-alpine

WORKDIR /app

COPY assets assets
COPY screens screens
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

CMD npx expo start