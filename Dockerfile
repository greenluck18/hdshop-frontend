# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the working directory
COPY . .

# Expose the port used by React development server
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
