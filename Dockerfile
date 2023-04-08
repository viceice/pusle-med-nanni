FROM nginx:stable-alpine@sha256:8745c93f1a1c33a8ec8c82707b9bb1c8fe9ebf2b5d82e9480e78625d809855a1

COPY build /usr/share/nginx/html/
