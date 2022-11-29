FROM node:16

WORKDIR /app

COPY ./build /app
ENV TZ=Asia/Shanghai

RUN npm install -g serve

EXPOSE 3000
