# Build Stage for React App
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build the React app
COPY . .
RUN npm run build

# Final Stage (Nginx + Python HTTP Server)
FROM alpine:latest

# Install Nginx, Python, and Supervisor
RUN apk add --no-cache nginx python3 py3-pip supervisor

# Copy React build to Nginx serving directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy static website files for Python HTTP server
COPY ./simpleWebServer/flag /var/www/html/flag
COPY ./simpleWebServer/details /var/www/html/details

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy Supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose Nginx port (Accessible from the outside)
EXPOSE 80

# Start Supervisor to run both services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
