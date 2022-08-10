FROM nginx:stable-alpine@sha256:6eeb2db7c28b1c68351fdb1464887690b6bf7a99f0c8db9d2baa1e7b4aad8d96

COPY build /usr/share/nginx/html/
