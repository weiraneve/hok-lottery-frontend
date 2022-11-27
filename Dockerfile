FROM node:16

WORKDIR /app

COPY . /app
ENV REACT_APP_IP=127.0.0.1
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000
