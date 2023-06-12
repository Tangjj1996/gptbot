FROM node:19 AS app

RUN npm install pnpm -g
RUN npm install pm2 -g

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

CMD ["pm2", "start", "dist/main.js", "--env=production"]
