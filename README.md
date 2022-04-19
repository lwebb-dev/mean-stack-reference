# MEAN Stack Reference

This monorepo templates a containerized barebones MEAN stack architecture. 

# MEAN Stack

## Base Technologies

- [**M**ongoDB](https://www.mongodb.com/) - Document based NOSQL database, ideal for small scale JavaScript based projects.
- [**E**xpress.js](https://expressjs.com/) - Minimalist web framework running on Node.js.
- [**A**ngular](https://angular.io/) - Front-End Javascript Framework. Do not confuse with Angular.js.
- [**N**ode.js](https://nodejs.org/) - Server-side JavaScript Runtime, the backbone of all our services/containers.

## Additional Technologies

These technologies are not part of the MEAN stack, but are implemented in this repository in order to improve the development experience.

- [Docker](https://www.docker.com/) - Virtualization Engine for containerizing our application's architecture. This repo in particular leverages Docker [Compose](https://docs.docker.com/compose/) to configure, build, initialize, and tear down our multi-container application using simple **Up** and **Down** commands within Docker's CLI.
- [NGINX](https://www.nginx.com/) - Open Source Web Server, used by our docker containers to mount our Angular SPA application.

## Primer

This [Article](https://www.mongodb.com/mean-stack) by MongoDB offers a good primer to those new to the MEAN Stack.