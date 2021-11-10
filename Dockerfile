FROM nginx:stable-alpine@sha256:672531f89bd685bb59f9ed40cff636898434ec783beec31546fbdc199f1be3ca

COPY build /usr/share/nginx/html/
