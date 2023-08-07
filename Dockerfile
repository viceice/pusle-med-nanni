FROM nginx:stable-alpine@sha256:ba1ee7c9383913d0bb9feb75fc9640112895da7834db04724c5c069072eb6f37

COPY build /usr/share/nginx/html/
