FROM nginx:stable-alpine@sha256:da9ddedc61974b42521c8b0535df5f6c5087fa41d4e1b6ac67c547002a710a22

COPY build /usr/share/nginx/html/
