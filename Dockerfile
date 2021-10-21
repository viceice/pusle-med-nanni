FROM nginx:stable-alpine@sha256:2012644549052fa07c43b0d19f320c871a25e105d0b23e33645e4f1bcf8fcd97

COPY build /usr/share/nginx/html/
