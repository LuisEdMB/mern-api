FROM node:12

WORKDIR /usr/src/app

COPY ./mern-api/package.json ./

RUN npm install

COPY ./mern-api .

CMD ["node", "server.js"]