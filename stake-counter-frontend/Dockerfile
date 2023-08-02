# Stage 1: Build the frontend app
FROM node:14 as build-frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .  
# Copy all files and folders from the current directory to the container
RUN npm run build

# Stage 2: Serve the frontend app using a lightweight web server
FROM nginx:alpine
COPY --from=build-frontend /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
