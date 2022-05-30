# Create an image from node 16.14
FROM node:16-alpine

COPY . ./usr/src/app

WORKDIR /usr/src/app/kit

RUN npm install --force

CMD ["npm", "start"]