FROM node:14-alpine

ENV WORKDIR=/app

WORKDIR $WORKDIR

COPY . ./

RUN yarn && yarn build

EXPOSE 3000 4000

CMD ["yarn", "serve"]
