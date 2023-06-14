FROM nginx:stable-alpine@sha256:cbd6dc486c5d9cb35bfccd2526e255943d5e65e67c655e13184c0b1dc8799021

COPY build /usr/share/nginx/html/
