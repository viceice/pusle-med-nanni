FROM nginx:stable-alpine@sha256:da3716611fb965f3fda1f3281882baeb2760ca8bb7317f1d22ed45e75570827b

COPY build /usr/share/nginx/html/
