# Use Node.js 18 as the base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code files
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run the application
CMD ["node", "server.js"]