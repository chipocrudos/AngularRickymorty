FROM node:alpine as Builder

WORKDIR /usr/src/app
RUN npm install -g @angular/cli
RUN ng config -g cli.warnings.versionMismatch false
COPY ./ .
RUN npm install
RUN ng build

RUN ls -la dist/

FROM nginx:alpine

COPY --from=Builder /usr/src/app/dist/angular-rickymorty/. /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

RUN ls -la /usr/share/nginx/html/
