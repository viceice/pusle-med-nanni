FROM nginx:stable-alpine@sha256:83dad2b60140eaafbf94cbdcec48f853863410bfd4557947a76c5ea5bad2bcc4

COPY build /usr/share/nginx/html/
