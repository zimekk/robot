FROM node:14.18.0-alpine

ENV WORKDIR=/app

WORKDIR $WORKDIR

COPY . ./

RUN yarn && yarn build

CMD ["yarn", "serve"]
