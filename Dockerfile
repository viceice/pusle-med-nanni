FROM nginx:stable-alpine@sha256:d759c3559a20078d156ccea0e537c274ba335ad6f975b421893ea518258d003a

COPY build /usr/share/nginx/html/
