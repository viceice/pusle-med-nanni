FROM nginx:stable-alpine@sha256:8853c7e938c2aa5d9d7439e698f0e700f058df8414a83134a09fcbb68bb0707a

COPY build /usr/share/nginx/html/
