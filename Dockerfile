FROM nginx:stable-alpine@sha256:662a0c5a8677063c27b0ddd42f1c801be643b9502f7b1a4e2e727cb2bc3808a8

COPY build /usr/share/nginx/html/
