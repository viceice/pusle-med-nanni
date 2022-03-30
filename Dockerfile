FROM nginx:stable-alpine@sha256:ff557e536e5c697c5a28db13ab81bdf9b0c6a20161aa0a46419b9b251872c7df

COPY build /usr/share/nginx/html/
