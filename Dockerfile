FROM nginx:stable-alpine@sha256:7415b6afae6370ab643fd9407af1b6767f948863c77cb616842de4710e90e66e

COPY build /usr/share/nginx/html/
