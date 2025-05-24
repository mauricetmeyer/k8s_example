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
COPY graph/package.json /data/graph/

##
# Install dependencies
RUN yarn install --frozen-lockfile

##
# Copy sources
COPY shared/tsconfig.json /data/shared
COPY shared/rollup.config.js /data/shared
COPY shared/src /data/shared/src

COPY graph/tsconfig.json /data/graph
COPY graph/src /data/graph/src

##
# Build
WORKDIR /data/shared
RUN yarn build

WORKDIR /data/graph
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
COPY --from=build /data/graph/dist /data

CMD ["node", "index.js"]
