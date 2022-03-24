FROM nginx:stable-alpine@sha256:61186fb9e8efb035e867751fa3dab6c4cb92ef39feab2a09edddd56695514a2c

COPY build /usr/share/nginx/html/
