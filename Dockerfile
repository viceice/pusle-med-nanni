FROM nginx:stable-alpine@sha256:62cabd934cbeae6195e986831e4f745ee1646c1738dbd609b1368d38c10c5519

COPY build /usr/share/nginx/html/
