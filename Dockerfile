FROM node:lts-alpine3.10

ENV NODE_ENV build

WORKDIR /home/node/back

COPY . .

RUN npm install \
    && npm run build

CMD ["npm","run", "start:dev"]
