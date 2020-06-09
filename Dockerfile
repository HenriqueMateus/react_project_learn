FROM node:10.13-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

EXPOSE 8080
CMD npm run-script dev

COPY . .