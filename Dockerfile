# Step 1: Build the React app
FROM node:22 AS builder
#RUN apt update && apt install -y tree
COPY ./mission-4 /app
WORKDIR /app
RUN npm ci
#RUN tree
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
