FROM nginx:stable-alpine@sha256:6386f5445b60d9b48efdc9034111b7ce62098e61309e5d3871542f64722e3211

COPY build /usr/share/nginx/html/
