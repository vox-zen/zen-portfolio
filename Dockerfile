# syntax = docker/dockerfile:1

ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

FROM base AS build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package-lock.json package.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM base AS final
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app /app

EXPOSE 8080

CMD ["npm", "run", "start"]
