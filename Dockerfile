FROM nginx:stable-alpine@sha256:ec3f6e4587a2053f406b1b4e027c260e82e4e32c256c04e798b52cb4f877e688

COPY build /usr/share/nginx/html/
