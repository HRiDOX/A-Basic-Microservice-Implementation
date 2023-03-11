#Specify a base image
FROM node:16-alpine
# Add the following lines
ENV CI=true
ENV WDS_SOCKET_PORT=0
#Install some depemdencies
#WORKDIR /the/workdir/path
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
#Default command
CMD ["npm","start"]