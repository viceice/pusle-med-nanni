FROM nginx:stable-alpine@sha256:98a1e37840fdf90f57df595dae8e27a198278170323744e13464b7f3a927562e

COPY build /usr/share/nginx/html/
