FROM nginx:stable-alpine@sha256:d24e098389beed466ea300d5473cdda939bf6e91a93873d0fd1dd18e138c2f13

COPY build /usr/share/nginx/html/
