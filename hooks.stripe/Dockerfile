##
# Build stage
FROM node:20-slim as build

##
# Update package manager and install
# buildchain tools.
RUN apt update

##
# Setup workdir
WORKDIR /data

##
# Copy initial files
COPY yarn.lock package.json tsconfig.json /data/
COPY shared/package.json /data/shared/
COPY api/package.json /data/api/

##
# Install dependencies
RUN yarn install --frozen-lockfile

##
# Copy sources
COPY shared/tsconfig.json /data/shared
COPY shared/rollup.config.js /data/shared
COPY shared/src /data/shared/src

COPY api/tsconfig.json /data/api
COPY api/src /data/api/src

##
# Build
WORKDIR /data/shared
RUN yarn build

WORKDIR /data/api
RUN yarn build
 
##
# Prunt to only production dependencies
RUN yarn install --production

##
# Running stage
FROM node:20-slim

##
# Just a bit of metadata
LABEL org.opencontainers.image.source https://github.com/lavireo/services

##
# Setup workdir and copy from build stage
WORKDIR /data
COPY --from=build /data/api/dist /data

CMD ["node", "index.js"]
