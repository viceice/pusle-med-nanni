FROM nginx:stable-alpine@sha256:7b801536219e8b3a5dcaf0c5a34c4d4d0514e648905c83105d98c56740eb4f07

COPY build /usr/share/nginx/html/
