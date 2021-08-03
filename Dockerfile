FROM node:lts-alpine3.10

ENV NODE_ENV build

WORKDIR /home/node/back

COPY . .

RUN npm i -g @nestjs/cli

RUN npm install \
    && npm run build

