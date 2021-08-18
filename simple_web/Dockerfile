FROM node:alpine

WORKDIR /usr/app
COPY ./package.json ./
#COPY only package.json for npm i cache
RUN npm install
COPY ./ ./



CMD ["npm","start"]