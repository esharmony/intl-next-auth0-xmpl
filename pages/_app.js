import '../styles/globals.css'
import {NextIntlProvider} from 'next-intl';
import { Cookies, CookiesProvider, useCookies } from 'react-cookie';
import { UserProvider } from '@auth0/nextjs-auth0';



function MyApp({ Component, pageProps }) {
  const isBrowser = typeof window !== 'undefined';
  return  (
    <CookiesProvider cookies={isBrowser ? undefined : new Cookies()}>
      <NextIntlProvider messages={pageProps.messages}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NextIntlProvider>
    </CookiesProvider>
  )
}

export default MyApp
