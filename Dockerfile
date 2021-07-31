FROM nginx:stable-alpine@sha256:bac218df22fef66a173cfa65d0dfa0acca80a3a39df41665be742596977b6c7c

COPY build /usr/share/nginx/html/
