FROM nginx:stable-alpine@sha256:3e129fe0de45ea916f768ceb792a75c473dc32147d6c3a0913fd9c3ae28dd8f1

COPY build /usr/share/nginx/html/
