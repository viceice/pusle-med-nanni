FROM nginx:stable-alpine@sha256:b92d3b942c8b84da889ac3dc6e83bd20ffb8cd2d8298eba92c8b0bf88d52f03e

COPY build /usr/share/nginx/html/
