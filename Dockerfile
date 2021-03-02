FROM nginx:stable-alpine@sha256:34039e81cf9de5f7f92f6280701e92cd51b85fb6b7170c41f6bf8920fcc79f8e

COPY build /usr/share/nginx/html/
