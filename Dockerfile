FROM node:20.11.1-bullseye-slim

WORKDIR /src

ADD package.json /src

RUN npm i --silent

ADD . /src

EXPOSE 3000

CMD npm start