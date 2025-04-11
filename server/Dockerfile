# Base stage
FROM node:18 AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS dev
RUN npm install
RUN npm install --save-dev nodemon
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
# Ensure generated client is in correct location
RUN cp -r node_modules/.prisma /app/prisma-generated
EXPOSE 5050
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS prod
RUN npm install --only=production
COPY --from=dev /app/prisma-generated ./node_modules/.prisma
COPY . .
RUN npm run build
EXPOSE 5050
CMD ["npm", "start"]