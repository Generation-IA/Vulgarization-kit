# Create an image from node 16.14
FROM node:16-alpine
# Clone the repository from github
WORKDIR /app

COPY . ./

WORKDIR /app/kit

RUN npm install

CMD ["npm", "start"]