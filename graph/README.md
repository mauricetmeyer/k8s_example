# Graph

This repository contains the GraphQL Service, our heart and soul.

## Table of Contents

- [Getting started](#getting-started)
  - [Dependencies](#dependencies)
  - [Requirements](#requirements)
  - [Initial setup](#initial-setup)
- [Running the tests](#running-the-tests)
  - [Linting](#linting)
  - [Tests](#tests)
- [Deployment](#deployment)
- [Configuration](#configuration)
  - [Config file](#config-file)
  - [Commandline arguments](#commandline-arguments)
- [More Information](#more-information)
- [Technologies used](#technologies-used)

## Getting started

### Requirements

You'll need to have NodeJS 16.x and NPM 7.x or higher installed. Before you start make sure that
you have the right versions installed by running the following commands:

- run `node -v`
- run `npm -v`
- run `yarn -v`

If you do not have `node` installed, the recommended way to install is [NVM](https://github.com/nvm-sh/nvm#installing-and-updating). Using NVM you can install NodeJS 12.x the following:

```
$ nvm install 16
```

You'll also need to build both `schema` and `shared` packages. To do this, run the following commands from their respective folders:

```
$ yarn build
```

### Initial setup

Start by cloning the project from [GitHub](https://github.com/leaflytics/services) using git. After installing, `cd` into the directory or open it in your favourite IDE and setup the dependencies using Yarn:

First start backend stack:

```
 docker-compose -f docker-compose-infrastructure.yml up -d
```

Create .env file with following content:

```
PORT=5001
SERVICE_API_KEY=
RABBITMQ_CONNECTION=amqp://localhost:5672
ENV=development
POSTGRES_CONNECTION=postgres://inguro-user:inguro-password@localhost:5432/postgres
REDIS_CONNECTION=redis://default:password@localhost:6379
SENTRY_KEY=
```

```
$ yarn install
$ yarn start
```

### Explore GraphQL API with Admin UI

Open Admin UI on http://localhost:5001/ and press `Query Your Server`
![alt text](./assets/admin-ui.png)

The Sandbox page will be opened, where you can test the GraphQL service API:
![alt text](./assets/sandbox.png)

### Linting

To run the linter, run:

```
$ npm run lint
```

### Tests

You can run tests with:

```
$ npm run test
```

```
 docker build -f Dockerfile -t qraphql --target test  .
```

## Deployment

Deployment is performed with GitHub Actions workflows [https://github.com/Inguro-OU/services/actions]

`Build Ship and Deploy GraphQL Acceptance` - deploy GraphQL to acceptance env

`Build Ship and Deploy GraphQL Production` - deploy GraphQL to production env
