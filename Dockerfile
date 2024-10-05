FROM node:20.18.0-alpine AS base

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
ENV PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Add user so we don't need --no-sandbox.
# RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
#     && mkdir -p /home/pptruser/Downloads /app \
#     && chown -R pptruser:pptruser /home/pptruser \
#     && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
# USER pptruser

ENV WORKDIR=/app

# https://pnpm.io/docker#example-3-build-on-cicd
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod
WORKDIR $WORKDIR
COPY pnpm-lock.yaml .
# RUN pnpm fetch --prod
RUN pnpm fetch

COPY . .
RUN pnpm install --offline --config.ignore-scripts=true
RUN pnpm build
RUN pnpm prune --prod --config.ignore-scripts=true

FROM base
WORKDIR $WORKDIR
# COPY --from=prod /app/node_modules /app/node_modules
# COPY --from=prod /app/dist /app/dist
COPY --from=prod $WORKDIR .

CMD ["pnpm", "serve"]
