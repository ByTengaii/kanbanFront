# Stage 1: Build the React application
FROM node:20-alpine AS build

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the code
COPY . .

# Build the app for production
RUN npm run build

# Check the content of the directory after build
RUN ls -la

# Stage 2: Serve the built app using Nginx on Alpine Linux
FROM nginx:alpine

# Adjust this line based on your actual build output directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]