FROM nginx:stable-alpine@sha256:b79e09601c46804c4be674e2674d5b4b2f497a51141bb3fc08698fbef9058648

COPY build /usr/share/nginx/html/
