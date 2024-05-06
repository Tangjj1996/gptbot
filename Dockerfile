FROM node:20 AS app

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "run", "start"]
