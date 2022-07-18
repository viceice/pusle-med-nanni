FROM nginx:stable-alpine@sha256:49296a7f42d4565cc7a420b17c24ae1c6dd01b35a4a14735bd4433a2929249b3

COPY build /usr/share/nginx/html/
