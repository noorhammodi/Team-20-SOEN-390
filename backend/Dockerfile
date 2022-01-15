FROM node:17-alpine3.14

WORKDIR /app

# Copy just package.json
COPY package.json /app

RUN npm install

# Copy over the rest of the files
COPY . /app/

# PORT
EXPOSE 3001

CMD ["npm","run", "dev"]



