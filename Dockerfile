FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=build /app/dist/expenses-app /usr/share/nginx/html
EXPOSE 80

# docker build -t expenses-tracker .
# docker run -it --rm -p 4300:80 expenses-tracker
