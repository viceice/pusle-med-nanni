FROM nginx:stable-alpine@sha256:93baf2ec1bfefd04d29eb070900dd5d79b0f79863653453397e55a5b663a6cb1

COPY build /usr/share/nginx/html/
