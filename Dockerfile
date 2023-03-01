FROM nginx:stable-alpine@sha256:db81e6644d4896391d83b92e6cb7ff7f9f0cfa5a14d2c7a621d682be99d90f43

COPY build /usr/share/nginx/html/
