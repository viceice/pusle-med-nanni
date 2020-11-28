FROM nginx:stable-alpine@sha256:ddcf5d8753a062e297e4448ec332e833f2688a9de667b2a723370a3bc7eb01d5

COPY build /usr/share/nginx/html/
