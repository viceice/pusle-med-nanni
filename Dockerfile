FROM nginx:stable-alpine@sha256:4411951a38c9fb7e91813971944d390ca7a824413ea318260e2bb4da86b172a8

COPY build /usr/share/nginx/html/
