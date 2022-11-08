FROM node:14-alpine

ENV WORKDIR=/app

WORKDIR $WORKDIR

COPY . ./

RUN yarn && yarn build

CMD ["yarn", "serve"]
