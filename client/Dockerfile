#Specify a base image
FROM node:16-alpine
#Install some depemdencies
#WORKDIR /the/workdir/path
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
#Default command
CMD ["npm","start"]