FROM nginx:stable-alpine@sha256:2366ede62d2e26a20f7ce7d0294694fe52b166107fd346894e4658dfb5273f9c

COPY build /usr/share/nginx/html/
