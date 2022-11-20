FROM node:14.18.0-alpine

# https://pptr.dev/troubleshooting#running-on-alpine
# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      tzdata

# https://stackoverflow.com/questions/68996420/how-to-set-timezone-inside-alpine-base-docker-image
# https://docs.diladele.com/docker/timezones.html
ENV TZ=Europe/Warsaw

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Add user so we don't need --no-sandbox.
# RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
#     && mkdir -p /home/pptruser/Downloads /app \
#     && chown -R pptruser:pptruser /home/pptruser \
#     && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
# USER pptruser

ENV WORKDIR=/app
WORKDIR $WORKDIR

COPY package.json yarn.lock ./
COPY packages/app/package.json packages/app/
COPY packages/chrome/package.json packages/chrome/
COPY packages/web/package.json packages/web/
COPY packages/worker/package.json packages/worker/
COPY packages/worker/bin packages/worker/bin/
RUN yarn --frozen-lockfile

COPY . ./
RUN yarn build

CMD ["yarn", "serve"]
