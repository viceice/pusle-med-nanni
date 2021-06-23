FROM nginx:stable-alpine@sha256:4ca0ee2d0f82bd18879a5d6f51365db49d7fcfd4768c113820c387a676ce7ac5

COPY build /usr/share/nginx/html/
