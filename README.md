# Angular Authentication with OpenID Connect and Okta

This example app shows how to use [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) and the 
[Okta Auth SDK](https://github.com/okta/okta-auth-js) to perform authentication in an Angular app.

Please read [Angular Authentication with OpenID Connect and Okta in 20 Minutes](http://developer.okta.com/blog/2017/04/17/angular-authentication-with-oidc) to learn how to create this application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-angular-openid-connect-example.git
cd okta-angular-openid-connect-example
npm install
```

This will get a copy of the project installed locally, install all of its dependencies and start the app.

### Create an OIDC App in Okta

You will need to [create an OIDC App in Okta](https://developer.okta.com/blog/2017/04/17/angular-authentication-with-oidc#create-an-openid-connect-app-in-okta) to get your values to perform authentication. 

OpenID Connect is built on top of the OAuth 2.0 protocol. It allows clients to verify the identity of the user and, as well as to obtain their basic profile information. To learn more, see [http://openid.net/connect](http://openid.net/connect/).

Login to your Okta account, or [create one](https://developer.okta.com/signup/) if you don't have one. Navigate to **Applications** and click on the **Add Application** button. Select **SPA** and click **Next**. On the next page, specify `http://localhost:4200` as a Base URI, Login redirect URI, and Logout redirect URI. Click **Done** and copy the generated `Client ID`.

In `src/app/app.component.ts`, set the `issuer` and paste your `clientId`.

```typescript
constructor(private oauthService: OAuthService) {
  this.oauthService.redirectUri = window.location.origin;
  this.oauthService.clientId = '{clientId}';
  this.oauthService.scope = 'openid profile email';
  this.oauthService.issuer = 'https://{yourOktaDomain}.com/oauth2/default';
  this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  
  // Load Discovery Document and then try to login the user
  this.oauthService.loadDiscoveryDocumentAndTryLogin();
}
```

You'll also need to update the `url` in `src/app/shared/auth/okta.auth.wrapper.ts`.

```typescript
constructor(private oauthService: OAuthService) {
  this.authClient = new OktaAuth({
    url: 'https://{yourOktaDomain}.com',
    issuer: 'default'
  });
}
```

**NOTE:** The value of `{yourOktaDomain}` should be something like `dev-123456.oktapreview`. Make sure you don't include `-admin` in the value!

After making these changes, you should be able to start the app (using `ng serve`) and log in with your credentials at `http://localhost:4200`.

## Links

This example uses the following libraries provided by Okta:

* [Okta Auth SDK](https://github.com/okta/okta-auth-js)

It also uses the following library provided by [Manfred Steyer](https://github.com/manfredsteyer):

* [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc)

## Help

Please post any questions as comments on the [blog post](http://developer.okta.com/blog/2017/04/17/angular-authentication-with-oidc), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

Apache 2.0, see [LICENSE](LICENSE).
