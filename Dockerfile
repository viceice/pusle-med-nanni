FROM nginx:stable-alpine@sha256:8f62e8ffc22a112ab3aeb56f56b9ea3e2561248dee1d8cb72c5d6462a7789b5e

COPY build /usr/share/nginx/html/
