# Use Node.js Alpine as the base image for a lightweight container
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Set the node environment to production and define default port
ENV NODE_ENV=production
ENV PORT=3000

# Copy package.json and package-lock.json first to leverage Docker build cache
COPY package*.json ./

# Install only production dependencies for a smaller, cleaner image
RUN npm ci --omit=dev

# Copy the rest of the application files (respecting .dockerignore)
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Define the command to run the Express application
CMD ["node", "bin/www"]
