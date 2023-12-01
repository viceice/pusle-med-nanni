FROM nginx:stable-alpine@sha256:0571deea2fbe77c6779607b66ee64e270922bb289849f764d9edc15645d132f5

COPY build /usr/share/nginx/html/
