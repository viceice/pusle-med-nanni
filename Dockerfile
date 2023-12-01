FROM nginx:stable-alpine@sha256:9b462f194450962ec049cf05a30c629241dcb467b6e0842ee0812b1d51d2ca64

COPY build /usr/share/nginx/html/
