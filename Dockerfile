FROM nginx:stable-alpine@sha256:5e1ccef1e821253829e415ac1e3eafe46920aab0bf67e0fe8a104c57dbfffdf7

COPY build /usr/share/nginx/html/
