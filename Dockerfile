FROM nginx:stable-alpine@sha256:c27238c20255fafe122db4c51dddf26544adae1bc397d978aa36aa2a092cb739

COPY build /usr/share/nginx/html/
