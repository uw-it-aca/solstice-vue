ARG NGINX_CONTAINER_VERSION=1.2.0

FROM us-docker.pkg.dev/uwit-mci-axdd/containers/nginx-container:${NGINX_CONTAINER_VERSION} as pre-app-container

USER root

RUN apt-get update && apt-get install git -y

ADD docker/nginx.conf /etc/nginx/nginx.conf
RUN chgrp acait /etc/nginx/nginx.conf && chmod g+w /etc/nginx/nginx.conf


FROM us-docker.pkg.dev/uwit-mci-axdd/containers/nginx-container:${NGINX_CONTAINER_VERSION} AS node-bundler

USER acait

COPY --chown=acait:acait index.html package.json vite.config.js vite-lib.config.js /app/
COPY --chown=acait:acait src /app/src
COPY --chown=acait:acait public /app/dist
COPY --chown=acait:acait public /app/public

RUN . /app/bin/activate &&\
    npm install --production &&\
    npm install vite &&\
    npm run build:lib &&\
    npm run build:web


FROM pre-app-container as app-container

USER acait
COPY --chown=acait:acait --from=node-bundler /app/dist /app/dist
