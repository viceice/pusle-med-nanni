FROM nginx:stable-alpine@sha256:eedbaccc242692c64b5996a363baaa9d9db65a8fc123483af13c640e5dee9b47

COPY build /usr/share/nginx/html/
