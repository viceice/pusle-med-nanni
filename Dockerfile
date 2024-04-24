FROM nginx:stable-alpine@sha256:ca264de71a95bea673822e729b4beb889fecfe0b34e5bcbd163a8923222b61e3

COPY build /usr/share/nginx/html/
