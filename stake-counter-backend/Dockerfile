FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .  
# Copy all files and folders from the current directory to the container
EXPOSE 8080
CMD ["node", "index.js"]
