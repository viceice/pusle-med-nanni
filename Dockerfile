FROM nginx:stable-alpine@sha256:c9b13d650795c89b8b72a0eebf240a2473235d24f1e87e13261e9fb857be5414

COPY build /usr/share/nginx/html/
