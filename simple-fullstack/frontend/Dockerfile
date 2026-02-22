# Build stage
FROM node:20-slim AS build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci && npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
