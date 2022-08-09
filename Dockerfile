FROM nginx:stable-alpine@sha256:4fe6cea98b4993598d2b5e415dfd245bfc952e3f3b1db5ac89c7288ab8bd34b1

COPY build /usr/share/nginx/html/
