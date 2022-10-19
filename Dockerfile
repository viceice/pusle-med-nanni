FROM nginx:stable-alpine@sha256:5ba534070ae1e5e83d52141b11ddced689b476c0001e7205f50979dc0cbdde3d

COPY build /usr/share/nginx/html/
