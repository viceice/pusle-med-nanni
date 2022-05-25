FROM nginx:stable-alpine@sha256:f335d7436887b39393409261603fb248e0c385ec18997d866dd44f7e9b621096

COPY build /usr/share/nginx/html/
