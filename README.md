# DOC-ONLINE

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest" target="_blank"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest" target="_blank"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Getting Started

### Installation

Clone the repository
```bash
$ git clone https://github.com/nathalia-lin/doc-online.git
```
Install dependencies
```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Database

The example codebase uses Sequelize with a postgres database.

Create a new postgres database with the name doc-online (or the name you specified in the config.json)

On application start, tables for all entities will be created.


## Authentication

This applications uses JSON Web Token (JWT) to handle authentication.


## A typical top-level directory layout

    .
    ├── build                     # Compiled files 
    ├── config 
    ├── documentation             
    ├── src
        ├── controller                # Handles incoming requests and returns responses to the client
        ├── database                  # Initialize database
        ├── dto                       # Validation
        ├── migrations                # Make changes in database
        ├── models                    # Outline of the objects
        ├── module                    # Organize the application structure
        ├── provider                  # Custom repositories
        ├── service                   # Injectable dependencies
        ├── shared                    # Shared between all routes
            ├── filters                     # Handled after the route handler is called
            ├── interceptors                # Handled before and after route handler is called
            ├── middlewares                 # Handled before route handler is called
        ├── main.ts                   # Entry file of the application
    ├── .gitignore                
    ├── .prettierrc               
    ├── nest-cli.json             # Used by nest-cli to generate new project
    ├── nodemon.debug.json        
    ├── nodemon.json              # Monitor changes and restart server
    ├── package-lock.json         
    ├── package.json              # Manage dependencies and scripts
    ├── README.md
    ├── tsconfig.build.json       
    ├── tsconfig.json             # Configuration of the TypeScript compiler (tsc)
    └── tslint.json               # Checks Typescript code quality


## Documentation

This application uses Compodoc for documentation

On your terminal run:

```bash
$ npm run compodoc
```

Then go to localhost:8080 to access the documentation


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).

