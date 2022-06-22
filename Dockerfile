FROM nginx:stable-alpine@sha256:4b7c1e9321939b62dc79cf4aa59d07d480b0b2641a924ddd79cb8c61189ac788

COPY build /usr/share/nginx/html/
