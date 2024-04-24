FROM nginx:stable-alpine@sha256:ca16009a8c25f52193506d4c90c98efbad4b6cbe73372e2a27972f05c5e02f15

COPY build /usr/share/nginx/html/
