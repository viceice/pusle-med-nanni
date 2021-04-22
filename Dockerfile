FROM nginx:stable-alpine@sha256:e015192ec74937149dce3aa1feb8af016b7cce3a2896246b623cfd55c14939a6

COPY build /usr/share/nginx/html/
