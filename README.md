# Authapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Prerequisites

Must have an app in https://auth0.com/, create a file named `variables.env.ts` at `/src/environments/variables.env.ts`

and setup the domain and clientID like this:
<pre>
    <code>
    export const ENV = {
        domain: 'your-domain.region.auth0.com',
        clientId: 'your-client-id'
    }
    </code>
</pre>
## Install dependecies

Run `npm install` to install necessary dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

* Visit https://auth0.com/docs/quickstart/spa/angular for more info on auth0 with Angular.
