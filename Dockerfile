FROM node:12

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/rocketplay/webapp

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]