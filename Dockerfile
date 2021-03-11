FROM nginx:stable-alpine@sha256:5aa813bef3232f2122c5ba042246d0f52baa6db95a05e8fa6f6c5ace3b410ebc

COPY build /usr/share/nginx/html/
