import { useUser } from '@auth0/nextjs-auth0';
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router';

export default function Authorisation() {
  const t = useTranslations('Auth');
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // just showing the login working with a returnTo, as it must use a fully qualified path 
    // also you must assign otherwise you will get an error, you cannot directly link to the api
    window.location.assign(`/api/auth/login?lang=${router.locale}&returnTo=${router.basePath}/${router.locale}/protected`)
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        {t('welcome')} {user.name}! <a href="/api/auth/logout">{t('logout')}</a>
      </div>
    );
  }

  return <a href="#" onClick={handleLogin}>{t('login')}</a>;

}