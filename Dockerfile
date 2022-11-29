FROM node:16

WORKDIR /app

COPY ./build /app

RUN npm install -g serve

EXPOSE 3000
