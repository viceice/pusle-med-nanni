FROM nginx:stable-alpine@sha256:089520833b93077841d3cdc7ab1f7b817de73c7e10070b71b85fa97da7623dbe

COPY build /usr/share/nginx/html/
