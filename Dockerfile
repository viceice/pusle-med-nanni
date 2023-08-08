FROM nginx:stable-alpine@sha256:2608e4a68dcba85be066baae8c6a1683b70147bf646fc5855197173853cabcaa

COPY build /usr/share/nginx/html/
