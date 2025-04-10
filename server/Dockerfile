# Base stage
FROM node:18 AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS dev
RUN npm install
RUN npm install --save-dev nodemon
COPY . .  # Copy all the files (should be optimized for production)
EXPOSE 5050
CMD ["npm", "run", "dev"]  # Assuming you have a "dev" script in package.json that uses nodemon

# Production stage
FROM base AS prod
RUN npm install --only=production
COPY . .  # Copy only the necessary files (e.g., package.json, dist/)
RUN npm run build  # Make sure to build the app
EXPOSE 5050
CMD ["npm", "start"]  # Assuming you have a "start" script in package.json
