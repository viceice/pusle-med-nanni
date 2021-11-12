FROM nginx:stable-alpine@sha256:57d1a39684ee5a5b5d34638cff843561d440d0f996303b2e841cabf228a4c2af

COPY build /usr/share/nginx/html/
