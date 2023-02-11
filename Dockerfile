FROM nginx:stable-alpine@sha256:cc61d734c3045fa64f3d50173e5025e35e0074a29e24559e5ce085b844f6287d

COPY build /usr/share/nginx/html/
