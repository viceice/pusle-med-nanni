FROM nginx:stable-alpine@sha256:1a08bb3e8581306cc53cc55beede88fcb242cd4faead0f31d08801c621528166

COPY build /usr/share/nginx/html/
