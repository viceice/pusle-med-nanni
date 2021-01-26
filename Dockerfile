FROM nginx:stable-alpine@sha256:7ae8e5c3080f6012f8dc719e2308e60e015fcfa281c3b12bf95614bd8b6911d6

COPY build /usr/share/nginx/html/
