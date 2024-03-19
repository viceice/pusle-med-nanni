FROM nginx:stable-alpine@sha256:da6de168bfdfc800a432708eb2951c86b0f860aab547523a248f2ccd3b4ee4b6

COPY build /usr/share/nginx/html/
