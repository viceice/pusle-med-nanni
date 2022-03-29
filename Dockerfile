FROM nginx:stable-alpine@sha256:762d45de15352a2a65c54cc4748d8d57f7f7be987920b7cb16b1623c9c5c08e6

COPY build /usr/share/nginx/html/
