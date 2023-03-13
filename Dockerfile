FROM nginx:stable-alpine@sha256:a9e4fce28ad7cc7de45772686a22dbeaeeb54758b16f25bf8f64ce33f3bff636

COPY build /usr/share/nginx/html/
