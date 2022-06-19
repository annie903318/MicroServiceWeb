FROM node:8-alpine

COPY . /workspace
WORKDIR /workspace
RUN npm install && npm cache clean --force

EXPOSE 3000

CMD npm start