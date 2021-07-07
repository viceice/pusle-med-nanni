FROM nginx:stable-alpine@sha256:0d577377e6908742dfcb91cf3fb361e1af49d1659957bf464bc808f6fe335d9a

COPY build /usr/share/nginx/html/
