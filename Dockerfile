# Use official Node.js image as base
FROM node:20

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production  dependencies
RUN npm install -g nodemon
RUN npm install --only=prod

#Install develpment depencies
RUN npm install --only=dev

# Copy rest of the application
COPY . .

# Expose port 3000 (assuming your frontend runs on port 3000)
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "dev"]


#command for running through docker
#docker build -t bharatbazzar .
#docker run -p 3000:3000 bharatbazzar
