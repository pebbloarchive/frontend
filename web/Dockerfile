FROM node:lts-alpine

#  Setting up the work directory.
WORKDIR /usr/web/app

# Copying the needed files to the work directory
COPY . ./

# Install yarn
RUN npm install -g yarn

# Building the application
RUN yarn build

# Running the application
ENTRYPOINT ["yarn", "start"]