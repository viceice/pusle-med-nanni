FROM nginx:stable-alpine@sha256:6845649eadc1f0a5dacaf5bb3f01b480ce200ae1249114be11fef9d389196eaf

COPY build /usr/share/nginx/html/
