FROM nginx:stable-alpine@sha256:b3dfbe3d843d056742163dd5ca330996f561feb344553df0906bd3479001d84b

COPY build /usr/share/nginx/html/
