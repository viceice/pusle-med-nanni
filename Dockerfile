FROM nginx:stable-alpine@sha256:016789c9a2d021b2dcb5e1c724c75ab0a57cc4e8cd7aab7bb28e69fec7c8c4fc

COPY build /usr/share/nginx/html/
