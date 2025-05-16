# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy local files
COPY server.js .
COPY message.txt .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]

