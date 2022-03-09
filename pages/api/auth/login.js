import { handleLogin } from '@auth0/nextjs-auth0';



export default async function login(req, res) {

  const allowedLocales = ['en', 'pl'];

  let lang = 'en';
  let returnTo = '/';
  // check to see if the lang is not passed directly first ( as this can be done on login button)
  if(req.query.lang){
    lang = req.query.lang;
    if(req.query.returnTo) returnTo = req.query.returnTo;
  }
  else {
    if(req.query.returnTo){
      const locale = req.query.returnTo.split('/')[3];
      if(allowedLocales.includes(locale)) lang = locale;
    }
  }

  try {
    await handleLogin(req, res, {
      authorizationParams: {
        language: lang,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}