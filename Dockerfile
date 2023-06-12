FROM node:19 AS app

RUN npm install pnpm -g

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm server
