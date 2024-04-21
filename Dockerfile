FROM nginx:stable-alpine@sha256:77e5d4a6ad906c5d3793764085706577fa705b1dc6f244ea0241c4b5e2155385

COPY build /usr/share/nginx/html/
