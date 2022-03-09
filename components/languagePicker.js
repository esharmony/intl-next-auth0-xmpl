import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function LanguagePicker() {

  const addDays = (date, days) => {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  };

  const router = useRouter();
  const isDev = process.env.NODE_ENV === 'development';
  const [cookies, setCookie] = useCookies(['NEXT_LOCALE']);
  const [lang, setLang] = useState('en');

  const handleChange = (e) => { 
    setLang(e.target.value)
    router.push(router.pathname, router.pathname, { locale: e.target.value });
    const date = new Date();
    const expires = addDays(date, 365);
    setCookie('NEXT_LOCALE', e.target.value, {
      path: '/',
      expires,
      secure: isDev ? false : true,
    });
  }

  useEffect(() => {
    if(cookies.NEXT_LOCALE){
      setLang(cookies.NEXT_LOCALE)
    }
  }, [cookies.NEXT_LOCALE])
  
  return (
    <div id="langPick">
      <select onChange={handleChange} value={lang}>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
    </div>
  )
}