# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Bind to port 3000
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
