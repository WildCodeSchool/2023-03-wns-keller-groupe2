FROM node:lts-alpine

RUN apk add make g++ python3 git
RUN npm i -g node-pre-gyp

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY tsconfig.json tsconfig.json

COPY src src

CMD npm start