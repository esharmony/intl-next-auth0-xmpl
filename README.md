## Purpose 

This is a running version of internationalised app including the internationlisation of the Auth0 login modal and process.

Disclaimer: At this point it contains a bit of a hack of the returnUrl to provide a language parameter needed for the Auth0 client to select the language.
The only language available in the demo is PL. but adding more languages is no issue

## Getting Started

1. You need an Auth0 account and client
2. You need to configure your auth0 client to allow your chosen languages, for this repo PL must be checked. Yo do this in the auth0 portal -> settings - languages 
3. You must add the setting below in the portal found in branding -> customise login: 

```
// around line 35 or anywhere that you can pic up the config 
// this will now use our selection passed from the front end and change tha language of the modal 

if(config.extraParams.language) language = config.extraParams.language;

```

4. you must set up a .env.local containing these parameters 

AUTH0_SECRET='yourauth0secret'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='yourauth0issuerbaseurl'
AUTH0_CLIENT_ID='yourauth0clientid'
AUTH0_CLIENT_SECRET='yourauth0clientsecret'
NEXT_PUBLIC_AUTH0_LOGIN=http://localhost:3000/api/auth/login

the NEXT_PUBLIC_AUTH0_LOGIN will force the loginUrl to ignore the internationlisation part of the url

run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

