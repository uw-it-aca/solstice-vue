FROM gcr.io/uwit-mci-axdd/nginx-container:1.0.3 as app-container

USER root
RUN apt-get update && apt-get install git -y
USER acait

COPY --chown=root:acait docker/nginx.conf /etc/nginx/nginx.conf
COPY --chown=acait:acait index.html package.json vite.config.js /app/
COPY --chown=acait:acait src /app/src
COPY --chown=acait:acait public /app/public

RUN . /app/bin/activate &&\
    npm install vite &&\
    npm run build
