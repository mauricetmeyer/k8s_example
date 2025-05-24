FROM node:16-slim as build

RUN apt update
WORKDIR /data

##
# Copy initial files
COPY surface/ /data/surface
COPY yarn.lock package.json tsconfig.json /data/

##
# Install dependencies
RUN yarn install --frozen-lockfile

##
# Build
WORKDIR /data/surface
RUN yarn build

FROM nginx:stable-alpine
COPY surface/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /data/surface/dist /data
