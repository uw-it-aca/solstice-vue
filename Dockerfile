FROM gcr.io/uwit-mci-axdd/nginx-container:1.0.3 as app-container

USER root

RUN apt-get update && apt-get install git -y

ADD docker/nginx.conf /etc/nginx/nginx.conf
RUN chgrp acait /etc/nginx/nginx.conf && chmod g+w /etc/nginx/nginx.conf

USER acait

COPY --chown=acait:acait index.html package.json vite.config.js /app/
COPY --chown=acait:acait src /app/src
COPY --chown=acait:acait public /app/public

RUN . /app/bin/activate &&\
    npm install vite &&\
    npm run build
