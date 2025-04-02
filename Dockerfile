# Use Node.js LTS version
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Create uploads directory
RUN mkdir -p uploads

# Set permissions for uploads directory
RUN chmod 777 uploads

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
