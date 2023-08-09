FROM nginx:stable-alpine@sha256:76ca7f6bfe01c3e22e3af85fd37c30149ece3ac2a444973687cab1765abca115

COPY build /usr/share/nginx/html/
