# Angular Authentication with OpenID Connect and Okta

Read [this tutorial](http://developer.okta.com/blog/2017/04/17/angular-authentication-with-oidc) to learn how to create this application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Create an OpenID Connect App in Okta

OpenID Connect is built on top of the OAuth 2.0 protocol. It allows clients to verify the identity of the user and, as well as to obtain their basic profile information. To learn more, see [http://openid.net/connect/](http://openid.net/connect/).

To integrate [Okta](http://developer.okta.com) for user authentication, you'll first need to [register](https://www.okta.com/developer/signup/) and create an OpenID Connect application.

Login to your Okta account, or create one if you don’t have one. Navigate to **Admin > Add Applications** and click on the **Create New App** button. Select **Single Page App (SPA)** for the Platform and **OpenID Connect** for the sign on method. Click the **Create** button and give your application a name. On the next screen, add `http://localhost:4200` as a Redirect URI and click **Finish**. You should see settings like the following.

![OIDC App Settings](src/assets/images/oidc-settings.png)

Click on the **People** tab and the **Assign to People** button. Assign yourself as a user, or someone else that you know the credentials for.

Copy the Client ID from the application you created and replace the one in `app.component.ts` and `home.component.ts`. Then start the server with `ng serve`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

If you encounter issues, please post a question to Stack Overflow with an [okta tag](http://stackoverflow.com/questions/tagged/okta), or hit me up on Twitter [@mraible](https://twitter.com/mraible).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
